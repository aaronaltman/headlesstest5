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
                {/* Main footer */}
                <Grid container spacing={3}>
                    {/* Logo */}
                    <Grid item xs={12} md={3}>
                        <Image
                            src="https://bpheadlesst962.wpengine.com/wp-content/uploads/2023/05/fixdapp-logo.webp"
                            alt="Logo"
                            width={200}
                            height={64}
                        />
                    </Grid>
                    {/* About, Contact Us, Help, and Legal columns */}
                    <Grid item container xs={12} md={9} spacing={3}>
                        <Grid item xs={6} sm={4} md={3}>
                            <Typography variant="h4">ABOUT</Typography>
                            <GreenDivider />
                            <Box>
                                <Typography fontSize="1.6rem" paddingBottom="10px;">About FIXD</Typography>
                                <Typography fontSize="1.6rem" paddingBottom="10px;">Careers</Typography>
                                <Typography fontSize="1.6rem" paddingBottom="10px;">Press</Typography>
                                <Typography fontSize="1.6rem" paddingBottom="10px;">Reviews</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3}>
                            <Typography variant="h4">CONTACT US</Typography>
                            <GreenDivider />
                            <Box>
                                <Typography fontSize="1.4rem">(925) 854-1766</Typography>
                                <Typography fontSize="1.4rem">support@fixdapp.com</Typography>
                                <Typography fontSize="1.4rem">999 Peachtree St NE Suite 840, Atlanta, GA 30309</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3}>
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
                        <Grid item xs={6} sm={4} md={3}>
                            <Typography variant="h4">LEGAL</Typography>
                            <GreenDivider />
                            <Box>
                                <Typography fontSize="1.4rem">Terms of Use</Typography>
                                <Typography fontSize="1.4rem">Privacy Policy</Typography>
                                <Typography fontSize="1.4rem">Advertising Disclosure</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Subfooter */}
                <Grid container spacing={3} sx={{ marginTop: 4, backgroundColor: '#e5eaf5', paddingTop: 2 }}>
                    {/* Logos */}
                    <Grid item xs={12} md={3}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Image src="/logo1.png" alt="Logo 1" width={50} height={50} />
                            </Grid>
                            <Grid item xs={6}>
                                <Image src="/logo2.png" alt="Logo 2" width={50} height={50} />
                            </Grid>
                            <Grid item xs={6}>
                                <Image src="/logo3.png" alt="Logo 3" width={50} height={50} />
                            </Grid>
                            <Grid item xs={6}>
                                <Image src="/logo4.png" alt="Logo 4" width={50} height={50} />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* 75% column */}
                    <Grid item xs={12} md={9}>
                        <div style={{ borderTop: '1px solid gray', paddingTop: 16 }}>
                            {/* Your content for the 75% right column */}
                            <Typography fontSize="1.4rem">Your content here</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Footer>
    );
}
