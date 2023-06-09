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
    const [modalOpen, setModalOpen] = useState(false); // Add this state to handle modal open status
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
                data: { submitGfForm },
            } = await submitForm({
                variables: {
                    input: {
                        id: data.gfForm.databaseId,
                        entryMeta: {
                            createdById: 1,
                            ip: '',
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
                setModalOpen(true);
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

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 1,
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        Success
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Your form has been submitted successfully.
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={() => setModalOpen(false)}>Close</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default AaronForm;

