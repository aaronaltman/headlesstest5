// _app.js
import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import 'normalize.css/normalize.css';
import '../styles/main.scss';
import ThemeStyles from 'components/ThemeStyles/ThemeStyles';
import { ThemeProvider } from '@mui/material/styles';

import theme from '/components/Theme.js/Theme.js';

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <>
            <ThemeStyles />
            <ThemeProvider theme={theme}>
                <FaustProvider pageProps={pageProps}>
                    <Component {...pageProps} key={router.asPath} />
                </FaustProvider>
            </ThemeProvider>
        </>
    );
}
