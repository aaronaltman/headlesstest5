import React from 'react';
import Image from 'next/image';
import { Button, Grid, Typography } from '@mui/material';

import styles from '/components/AaronHero2/AaronHero2.module.scss';

const AaronHero2 = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="https://bpheadlesst962.wpengine.com/wp-content/uploads/2023/05/phones-app-transparent-large.webp"
                                alt="Fixdapp way of fixing cars"
                                width={972}
                                height={874}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={styles.content}>
                            <Typography variant="h5" component="h3" className={styles.subtitle}>
                                YOUR POCKET CAR EXPERT
                            </Typography>
                            <Typography variant="h2" component="h1" className={styles.title}>
                                Save money on vehicle repairs & car mechanic bills
                            </Typography>
                            <Typography variant="body1" className={styles.text}>
                                The FIXD sensor and free app tells you why your check engine light is on to help you save time and money
                            </Typography>
                            <div className={styles.aaronpadding}></div>
                            <Button variant="contained" className={styles.button}>
                                Get FIXD 67% Off
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
};

export default AaronHero2;
