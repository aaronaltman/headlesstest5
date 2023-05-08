import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { TextField, Button, Box, Grid, Paper, Modal, Typography } from '@mui/material';

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
                if (field.type === 'name') {
                    acc.firstName = '';
                    acc.lastName = '';
                } else if (field.type === 'email') {
                    acc.email = '';
                    acc.emailConfirmation = '';
                } else {
                    acc[field.databaseId] = '';
                }
                return acc;
            }, {});
            setFieldValues(initialFieldValues);
        }
    }, [loading, data]);

    const handleSubmit = async e => {
        e.preventDefault();

        const fieldValuesArray = [
            {
                id: 1,
                value: {
                    first: fieldValues.firstName,
                    last: fieldValues.lastName,
                },
            },
            {
                id: 2,
                value: {
                    value: fieldValues.email,
                    confirmationValue: fieldValues.emailConfirmation,
                },
            },
            {
                id: 3,
                value: fieldValues.message,
            },
        ];

        try {
            const {
                data: { submitForm: submitGfForm },
            } = await submitForm({
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
                setModalOpen(true); // Show the modal on successful form submission
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
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Paper elevation={3}>
                            <Box p={2}>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="First Name"
                                                value={fieldValues.firstName}
                                                onChange={(e) =>
                                                    handleChange('firstName', e.target.value)
                                                }
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Last Name"
                                                value={fieldValues.lastName}
                                                onChange={(e) =>
                                                    handleChange('lastName', e.target.value)
                                                }
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                type="email"
                                                value={fieldValues.email}
                                                onChange={(e) =>
                                                    handleChange('email', e.target.value)
                                                }
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Confirm Email"
                                                type="email"
                                                value={fieldValues.emailConfirmation}
                                                onChange={(e) =>
                                                    handleChange(
                                                        'emailConfirmation',
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Message"
                                                multiline
                                                rows={4}
                                                value={fieldValues.message}
                                                onChange={(e) =>
                                                    handleChange('message', e.target.value)
                                                }
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" variant="contained">
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
}

export default AaronForm;
