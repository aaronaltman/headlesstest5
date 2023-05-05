import React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';

import styles from './AaronHero.module.scss';

const AaronHero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={"container"}>
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="https://bpheadlesst962.wpengine.com/wp-content/uploads/2023/05/phones-app-transparent-large.webp"
                                    alt="Fixdapp way of fixing cars"
                                    width={972}
                                    height={874}
                                    layout="responsive"
                                    priority={true}
                                />
                            </div>
                        </div>
                        <div className={styles.rightCol}>
                            <div className={styles.content}>
                                <h3>YOUR POCKET CAR EXPERT</h3>
                                <h1>Save money on vehicle repairs & car mechanic bills</h1>
                                <p className={styles.text}>
                                    The FIXD sensor and free app tells you why your check engine light is on to help you save time and money
                                </p>
                                <div className={styles.aaronpadding}></div>
                                <Button variant="contained" sx={{ backgroundColor: '#4caf50' }}>
                                    Get FIXD 67% Off
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AaronHero;
