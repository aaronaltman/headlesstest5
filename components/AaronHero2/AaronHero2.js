import React from 'react';
import Image from 'next/image';
import { Button, Container, Grid, Typography } from '@mui/material';

const AaronHero2 = () => {
    return (
        <section style={{ backgroundColor: '#f2f2f2' }}>
            <Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item md={6}>
                        <div style={{ maxWidth: '100%', height: 'auto' }}>
                            <Image
                                src="https://bpheadlesst962.wpengine.com/wp-content/uploads/2023/05/phones-app-transparent-large.webp"
                                alt="Fixdapp way of fixing cars"
                                width={972}
                                height={874}
                            />
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <div>
                            <Typography variant="h3" component="h3" gutterBottom>
                                YOUR POCKET CAR EXPERT
                            </Typography>
                            <Typography variant="h1" component="h1" gutterBottom>
                                Save money on vehicle repairs & car mechanic bills
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                The FIXD sensor and free app tells you why your check engine light is on to help you save time and money
                            </Typography>
                            <div style={{ marginTop: '2rem' }}>
                                <Button variant="contained" color="primary">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default AaronHero2;
