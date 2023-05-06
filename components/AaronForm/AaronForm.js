import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

// Fetch form query
const FETCH_FORM_QUERY = gql`
  query GetForm {
    gravityFormsForm(id: 1) {
      id
      title
      formFields {
        id
        label
        ... on TextField {
          type: __typename
        }
        ... on TextAreaField {
          type: __typename
        }
      }
    }
  }
`;

// Submit form mutation
const SUBMIT_FORM_MUTATION = gql`
  mutation SubmitForm($fieldValues: [FieldValuesInput]) {
    submitGfForm(input: { id: 1, fieldValues: $fieldValues }) {
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
    const [fieldValues, setFieldValues] = useState([]);
    const { loading, data } = useQuery(FETCH_FORM_QUERY);
    const [submitForm] = useMutation(SUBMIT_FORM_MUTATION);

    const handleChange = (fieldId, value) => {
        setFieldValues((prev) => [...prev.filter((fv) => fv.id !== fieldId), { id: fieldId, value }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await submitForm({ variables: { fieldValues } });
        console.log(result);
    };

    const renderForm = () => {
        if (loading) return <p>Loading...</p>;
        const { formFields } = data.gravityFormsForm;

        return (
            <form onSubmit={handleSubmit}>
                {formFields.map((field) => {
                    const { id, label, type } = field;

                    switch (type) {
                        case 'TextField':
                            return (
                                <div key={id}>
                                    <label htmlFor={`field-${id}`}>{label}</label>
                                    <input type="text" id={`field-${id}`} onChange={(e) => handleChange(id, e.target.value)} />
                                </div>
                            );
                        case 'TextAreaField':
                            return (
                                <div key={id}>
                                    <label htmlFor={`field-${id}`}>{label}</label>
                                    <textarea id={`field-${id}`} onChange={(e) => handleChange(id, e.target.value)} />
                                </div>
                            );
                        // Add more cases for other field types as needed
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
