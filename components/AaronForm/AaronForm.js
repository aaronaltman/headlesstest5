import React, { useState, useEffect } from 'react';
import OAuth from 'oauth-1.0a';
import fetch from 'isomorphic-fetch';


const b64_hmac_sha1 = (key, data) => {
    const hmac = require('crypto').createHmac('sha1', key);
    hmac.update(data);
    return hmac.digest('base64');
};

const AaronForm = () => {
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        // Initialize OAuth object
        const oauth = OAuth({
            consumer: {
                key: 'ck_646081aac85800915e690aa5df53f31b43e056ab',
                secret: 'cs_9ac0dd1c09f8354f34edc83cc5ab3b5fb84d2aea',
            },
            signature_method: 'HMAC-SHA1',
            hash_function: b64_hmac_sha1,
        });

        // Define API URL and request parameters
        const apiUrl = 'https://bpheadlesst962.wpengine.com/wp-json/gf/v2/forms/1';
        const requestData = {
            url: apiUrl,
            method: 'GET',
        };

        // Get OAuth headers
        const headers = oauth.toHeader(oauth.authorize(requestData));

        // Make API request using fetch and OAuth headers
        fetch(apiUrl, {
            method: 'GET',
            headers,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setFormData(data);
            })
            .catch((error) => {
                console.error('Error fetching form data:', error);
            });
    }, []);

    // Render the form using the fetched form data
    const renderForm = () => {
        if (!formData) return <p>Loading...</p>;

        return (
            <form>
                {formData.fields.map((field) => {
                    const { id, label, type } = field;

                    switch (type) {
                        case 'text':
                            return (
                                <div key={id}>
                                    <label htmlFor={`field-${id}`}>{label}</label>
                                    <input type="text" id={`field-${id}`} />
                                </div>
                            );
                        case 'textarea':
                            return (
                                <div key={id}>
                                    <label htmlFor={`field-${id}`}>{label}</label>
                                    <textarea id={`field-${id}`} />
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

    return (
        <div>
            {/* Render form elements here */}
            {renderForm()}
        </div>
    );
};

export default AaronForm;
