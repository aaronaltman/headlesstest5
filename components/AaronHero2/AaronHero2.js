import React from 'react';
import Image from 'next/image';
import { Button, Grid, Typography, Box } from '@mui/material';

const AaronHero2 = () => {
    return (
        <Box
            py={8}
            px={{ xs: 2, sm: 3, md: 4 }}
            sx={{
                backgroundColor: '#e5eaf5',
                width: '100%',
                margin: 0,
            }}
        >
            <div className="container">
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center">
                        <Image
                            src="https://bpheadlesst962.wpengine.com/wp-content/uploads/2023/05/phones-app-transparent-large.webp"
                            alt="Fixdapp way of fixing cars"
                            width={972}
                            height={874}
                            layout="responsive"
                            priority={true}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h5" component="h3" gutterBottom>
                            YOUR POCKET CAR EXPERT
                        </Typography>
                        <Typography variant="h2" component="h1" gutterBottom>
                            Save money on vehicle repairs & car mechanic bills
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            The FIXD sensor and free app tells you why your check engine light is on to help you save time and money
                        </Typography>
                        <Box py={2}>
                            <Button variant="contained" color="primary">
                                Get FIXD 67% Off
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </div>
        </Box>

    );
};

export default AaronHero2;
