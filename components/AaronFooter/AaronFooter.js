import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

const Footer = styled('footer')(({ theme }) => ({
    backgroundColor: '#e5eaf5', // Changed the background color to #e5eaf5
    padding: theme.spacing(5, 3), // Top and bottom padding set to 40px
    color: 'black', // Changed the text color to black
}));

export default function AaronFooter() {
    return (
        <Footer>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Image
                            src="https://bpheadlesst962.wpengine.com/wp-content/uploads/2023/05/fixdapp-logo.webp" // Replace with the path to your logo
                            alt="Logo"
                            width={300}
                            height={96}
                        />
                        <Typography variant="h6">Wider Column</Typography>
                        {/* Add your content here */}
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6">Column 2</Typography>
                        {/* Add your content here */}
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6">Column 3</Typography>
                        {/* Add your content here */}
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6">Column 4</Typography>
                        {/* Add your content here */}
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6">Column 5</Typography>
                        {/* Add your content here */}
                    </Grid>
                </Grid>
            </Container>
        </Footer>
    );
}
