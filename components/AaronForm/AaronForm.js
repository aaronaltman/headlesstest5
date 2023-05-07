import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

// Fetch form query
const FETCH_FORM_QUERY = gql`
  query GetForm {
    gfForm(id: "Z2ZfZm9ybTox") {
      id
      title
      formFields {
        edges {
          node {
            id
            type
          }
        }
      }
    }
  }
`;

// Submit form mutation
const SUBMIT_FORM_MUTATION = gql`
  mutation SubmitForm($name: String!, $email: String!, $message: String!) {
    submitGfForm(input: {
      id: "1",
      fieldValues: [
        {
          id: "name",
          value: $name
        },
        {
          id: "email",
          value: $email
        },
        {
          id: "message",
          value: $message
        }
      ]
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
    const [fieldValues, setFieldValues] = useState({
        name: '',
        email: '',
        message: ''
    });
    const { loading, data } = useQuery(FETCH_FORM_QUERY);
    const [submitForm] = useMutation(SUBMIT_FORM_MUTATION);

    const handleChange = (fieldId, value) => {
        setFieldValues(prev => ({
            ...prev,
            [fieldId]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const result = await submitForm({
            variables: {
                name: fieldValues.name,
                email: fieldValues.email,
                message: fieldValues.message
            }
        });
        console.log(result);
    };

    const renderForm = () => {
        if (loading || !data) return <p>Loading...</p>;

        const formFields = data.gfForm.formFields.edges.map(edge => edge.node);

        return (
            <form onSubmit={handleSubmit}>
                {formFields.map(field => {
                    const { id, type } = field;

                    switch (type) {
                        case 'TEXT':
                            return (
                                <div key={id}>
                                    <label htmlFor={`field-${id}`}>{type}</label>
                                    <input
                                        type="text"
                                        id={`field-${id}`}
                                        onChange={e => handleChange(id, e.target.value)}
                                    />
                                </div>
                            );
                        case 'TEXTAREA':
                            return (
                                <div key={id}>
                                    <label htmlFor={`field-${id}`}>{type}</label>
                                    <textarea
                                        id={`field-${id}`}
                                        onChange={e => handleChange(id, e.target.value)}
                                    />
                                </div>
                            );
                        default:
                            return null;
                    }
                })}
                <button type="submit">Submit</button>
            </form>
        );
    };

    return <div>{renderForm()}</div>;
};

export default AaronForm;
