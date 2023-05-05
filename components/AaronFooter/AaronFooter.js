import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

const Footer = styled('footer')(({ theme }) => ({
    backgroundColor: '#e5eaf5',
    padding: theme.spacing(5, 3),
    color: 'black',
}));

const GreenDivider = styled('hr')({
    borderColor: 'green',
    borderWidth: '2px',
    marginTop: 8,
    marginBottom: 16,
});

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
                            layout="responsive"
                            quality={90}
                            priority={true}
                        />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h4">ABOUT</Typography>
                        <GreenDivider />
                        <Box>
                            <Typography fontSize="1.4rem">About FIXD</Typography>
                            <Typography fontSize="1.4rem">Careers</Typography>
                            <Typography fontSize="1.4rem">Press</Typography>
                            <Typography fontSize="1.4rem">Reviews</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h4">CONTACT US</Typography>
                        <GreenDivider />
                        <Box>
                            <Typography fontSize="1.4rem">(925) 854-1766</Typography>
                            <Typography fontSize="1.4rem">support@fixdapp.com</Typography>
                            <Typography fontSize="1.4rem">999 Peachtree St NE Suite 840, Atlanta, GA 30309</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h4">HELP</Typography>
                        <GreenDivider />
                        <Box>
                            <Typography fontSize="1.4rem">Help Center</Typography>
                            <Typography fontSize="1.4rem">Contact Support</Typography>
                            <Typography fontSize="1.4rem">FIXD app and sensor FAQ</Typography>
                            <Typography fontSize="1.4rem">Returns and warranty</Typography>
                            <Typography fontSize="1.4rem">Manage subscription</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h4">LEGAL</Typography>
                        <GreenDivider />
                        <Box>
                            <Typography fontSize="1.4rem">Terms of Use</Typography>
                            <Typography fontSize="1.4rem">Privacy Policy</Typography>
                            <Typography fontSize="1.4rem">Advertising Disclosure</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Footer>
    );
}
