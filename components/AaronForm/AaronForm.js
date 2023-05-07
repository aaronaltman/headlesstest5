import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { TextField, Button, Box } from '@mui/material';

const FETCH_FORM_QUERY = gql`
  {
    gfForm(id: 1, idType: DATABASE_ID) {
      cssClass
      databaseId
      dateCreated
      formFields {
        nodes {
          databaseId
          type
          ... on TextField {
            label
            description
          }
        }
      }
      pagination {
        lastPageButton {
          text
          type
        }
      }
      title
    }
  }
`;

const SUBMIT_FORM_MUTATION = gql`
  mutation SubmitForm($input: SubmitGfFormInput!) {
    submitGfForm(input: $input) {
      confirmation {
        type
        message
        url
      }
      errors {
        id
        message
      }
      entry {
        id
      }
    }
  }
`;

const AaronForm = () => {
    const [fieldValues, setFieldValues] = useState({});
    const { loading, data } = useQuery(FETCH_FORM_QUERY);
    const [submitForm] = useMutation(SUBMIT_FORM_MUTATION);

    useEffect(() => {
        if (!loading && data) {
            const fields = data.gfForm.formFields.nodes;
            const initialFieldValues = fields.reduce((acc, field) => {
                acc[field.databaseId] = '';
                return acc;
            }, {});
            setFieldValues(initialFieldValues);
        }
    }, [loading, data]);

    const handleSubmit = async e => {
        e.preventDefault();

        const fieldValuesArray = [
            { id: 1, value: fieldValues.firstName },
            { id: 2, value: fieldValues.lastName },
            { id: 3, emailValues: { value: fieldValues.email, confirmationValue: fieldValues.emailConfirmation } },
            { id: 4, value: fieldValues.message },
        ];

        try {
            const { data: { submitGfForm } } = await submitForm({
                variables: {
                    input: {
                        id: data.gfForm.databaseId,
                        entryMeta: {
                            createdById: 1, // The user ID.
                            ip: '', // IP address
                        },
                        fieldValues: fieldValuesArray,
                        saveAsDraft: false,
                        sourcePage: 1,
                        targetPage: 0,
                    },
                },
            });

            if (submitGfForm.errors && submitGfForm.errors.length > 0) {
                console.error('Form submission errors:', submitGfForm.errors);
            } else {
                console.log('Form submitted successfully:', submitGfForm);
                alert(submitGfForm.confirmation.message);
            }
        } catch (err) {
            console.error('Error submitting form:', err);
        }
    };

    const handleChange = (fieldId, value) => {
        setFieldValues(prevValues => ({ ...prevValues, [fieldId]: value }));
    };

    return (
        <Box>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="First Name"
                        value={fieldValues.firstName}
                        onChange={e => handleChange('firstName', e.target.value)}
                        required
                    />
                    <TextField
                        label="Last Name"
                        value={fieldValues.lastName}
                        onChange={e => handleChange('lastName', e.target.value)}
                        required
                    />
                    <TextField
                        label="Email"
                        type="email"
                        value={fieldValues.email}
                        onChange={e => handleChange('email', e.target.value)}
                        required
                    />
                    <TextField
                        label="Confirm Email"
                        type="email"
                        value={fieldValues.emailConfirmation}
                        onChange={e => handleChange('emailConfirmation', e.target.value)}
                        required
                    />
                    <TextField
                        label="Message"
                        multiline
                        rows={4}
                        value={fieldValues.message}
                        onChange={e => handleChange('message', e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                </form>
            )}
        </Box>
    );
};

export default AaronForm;
