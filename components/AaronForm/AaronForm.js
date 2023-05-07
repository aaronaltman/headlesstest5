import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { TextField,Button, Box } from '@mui/material';

// Fetch form query
const FETCH_FORM_QUERY = gql`
  query GetForm {
    gfForms {
      nodes {
        formFields {
          edges {
            node {
              id
              __typename
              ... on EmailField {
                id
                isRequired
              }
              ... on NameField {
                id
                isRequired
              }
              ... on TextField {
                id
              }
              ... on TextAreaField {
                id
              }
            }
          }
        }
      }
    }
  }
`;


// Submit form mutation
const SUBMIT_FORM_MUTATION = gql`
  mutation SubmitForm($fieldValues: [InputFieldVal]!) {
    submitGfForm(input: {
      id: "Z2ZfZm9ybTox",
      fieldValues: $fieldValues
    }) {
      errors {
        id
        message
      }
      confirmation {
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
            const initialFieldValues = data.gfForms.nodes[0].formFields.edges.reduce((acc, edge) => {
                acc[edge.node.id] = '';
                return acc;
            }, {});
            setFieldValues(initialFieldValues);
        }
    }, [loading, data]);

    const handleChange = (fieldId, value) => {
        setFieldValues(prev => ({
            ...prev,
            [fieldId]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const { data: { submitGfForm } } = await submitForm({
                variables: {
                    fieldValues: Object.entries(fieldValues).map(([id, value]) => ({
                        id,
                        value
                    }))
                }
            });

            if (submitGfForm.errors && submitGfForm.errors.length > 0) {
                console.error("Form submission errors:", submitGfForm.errors);
            } else {
                console.log("Form submitted successfully:", submitGfForm);
                alert(submitGfForm.confirmation.message);
            }
        } catch (err) {
            console.error("Error submitting form:", err);
        }
    };

    const renderForm = () => {
        if (
            loading ||
            !data ||
            !data.gfForms ||
            !data.gfForms.nodes ||
            !data.gfForms.nodes[0] ||
            !data.gfForms.nodes[0].formFields ||
            !data.gfForms.nodes[0].formFields.edges
        ) {
            return <p>Loading...</p>;
        }

        const formFields = data.gfForms.nodes[0].formFields.edges.map(edge => edge.node);


        return (
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column">
                    {formFields.map(field => {
                        const { id } = field;

                        switch (field.__typename) {
                            case 'NameField':
                                return (
                                    <TextField
                                        key={id}
                                        id={`field-${id}`}
                                        label="Name"
                                        variant="outlined"
                                        margin="normal"
                                        onChange={e => handleChange(id, e.target.value)}
                                    />
                                );
                            case 'EmailField':
                                return (
                                    <TextField
                                        key={id}
                                        id={`field-${id}`}
                                        label="Email"
                                        variant="outlined"
                                        margin="normal"
                                        onChange={e => handleChange(id, e.target.value)}
                                    />
                                );
                            case 'TextField':
                                // ... handle TextField
                                break;
                            case 'TextAreaField':
                                return (
                                    <TextField
                                        key={id}
                                        id={`field-${id}`}
                                        label="Message"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        margin="normal"
                                        onChange={e => handleChange(id, e.target.value)}
                                    />
                                );
                            default:
                                return null;
                        }
                    })}
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            </form>
        );
    };

    return <div>{renderForm()}</div>;
};

export default AaronForm;

