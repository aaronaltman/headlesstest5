import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

const Footer = styled('footer')(({ theme }) => ({
    backgroundColor: '#e5eaf5',
    padding: theme.spacing(5, 3),
    color: 'black',
}));

export default function AaronFooter() {
    return (
        <Footer>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Image
                            src="https://bpheadlesst962.wpengine.com/wp-content/uploads/2023/05/fixdapp-logo.webp"
                            alt="Logo"
                            width={200}
                            height={64}
                        />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h5">ABOUT</Typography>
                        <Box>
                            <Typography fontSize="1.2rem">About FIXD</Typography>
                            <Typography fontSize="1.2rem">Careers</Typography>
                            <Typography fontSize="1.2rem">Press</Typography>
                            <Typography fontSize="1.2rem">Reviews</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h5">CONTACT US</Typography>
                        <Box>
                            <Typography fontSize="1.2rem">(925) 854-1766</Typography>
                            <Typography fontSize="1.2rem">support@fixdapp.com</Typography>
                            <Typography fontSize="1.2rem">999 Peachtree St NE Suite 840, Atlanta, GA 30309</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h5">HELP</Typography>
                        <Box>
                            <Typography fontSize="1.2rem">Help Center</Typography>
                            <Typography fontSize="1.2rem">Contact Support</Typography>
                            <Typography fontSize="1.2rem">FIXD app and sensor FAQ</Typography>
                            <Typography fontSize="1.2rem">Returns and warranty</Typography>
                            <Typography fontSize="1.2rem">Manage subscription</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h5">LEGAL</Typography>
                        <Box>
                            <Typography fontSize="1.2rem">Terms of Use</Typography>
                            <Typography fontSize="1.2rem">Privacy Policy</Typography>
                            <Typography fontSize="1.2rem">Advertising Disclosure</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Footer>
    );
}
