import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

const AaronForm = () => {
    // Helper function to calculate the signature needed for authentication
    const calculateSig = (stringToSign, privateKey) => {
        const hash = CryptoJS.HmacSHA1(stringToSign, privateKey);
        const base64 = hash.toString(CryptoJS.enc.Base64);
        return encodeURIComponent(base64);
    };

    const [formData, setFormData] = useState(null);

    useEffect(() => {
        async function fetchFormData() {
            const d = new Date();
            const expiration = 3600; // 1 hour
            const unixtime = parseInt(d.getTime() / 1000);
            const futureUnixtime = unixtime + expiration;
            const publicKey = 'ck_646081aac85800915e690aa5df53f31b43e056ab';
            const privateKey = 'cs_9ac0dd1c09f8354f34edc83cc5ab3b5fb84d2aea';
            const method = 'GET';
            const route = 'forms/1';

            const stringToSign = publicKey + ':' + method + ':' + route + ':' + futureUnixtime;
            const sig = calculateSig(stringToSign, privateKey);
            const apiUrl = 'https://bpheadlesst962.wpengine.com/wp-json/gf/v2/' + route + '?_gf_json_nonce=' + publicKey + '&signature=' + sig + '&expires=' + futureUnixtime;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (response.status !== 200) {
                    console.error('There was an error attempting to access the API - ' + response.status + ': ' + data.response);
                    return;
                }

                setFormData(data);
            } catch (error) {
                console.error('Error fetching form data:', error);
            }
        }

        fetchFormData();
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
