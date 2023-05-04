import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

const Footer = styled('footer')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    color: 'white',
}));

export default function CustomFooter() {
    return (
        <Footer>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Image
                            src="/path/to/your/logo.png" // Replace with the path to your logo
                            alt="Logo"
                            width={150}
                            height={48}
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
