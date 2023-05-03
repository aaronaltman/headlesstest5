import React from 'react';
import { Button, Container, Grid, Box } from '@mui/material';

const AaronTopBar = () => {
    return (
        <Box sx={{ backgroundColor: '#4caf50', width: '100%' }}>
            <Container maxWidth="lg">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <div style={{ color: '#fff' }}>
                            <h1>Left Column Text</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend velit vel sapien laoreet blandit. Mauris tempor dictum mauris, ac sodales nibh pharetra eu. Donec ac vestibulum ipsum, quis sollicitudin libero. Nulla nec nisl enim.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="contained" sx={{ backgroundColor: '#8bc34a', color: '#fff' }}>
                                Green Button
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AaronTopBar;
