import React from 'react';
import Image from 'next/image';
import { Button, Container, Grid } from '@mui/material';

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
                            <h3 style={{ fontSize: '1.5rem' }}>YOUR POCKET CAR EXPERT</h3>
                            <h1 style={{ fontSize: '2.5rem' }}>Save money on vehicle repairs & car mechanic bills</h1>
                            <p style={{ fontSize: '1.1rem' }}>
                                The FIXD sensor and free app tells you why your check engine light is on to help you save time and money
                            </p>
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
