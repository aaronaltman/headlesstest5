import React from 'react';
import Image from 'next/image';

import styles from './AaronHero.module.scss';

const AaronHero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.leftCol}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/phones-app-transparent-large.webp"
                                alt="Fixdapp way of fixing cars"
                                width={972}
                                height={874}
                            />
                        </div>
                    </div>
                    <div className={styles.rightCol}>
                        <div className={styles.content}>
                            <p className={styles.text}>
                                YOUR POCKET CAR EXPERT
                            </p>
                            <h1 className={styles.heading}>Save money on vehicle repairs & car mechanic bills</h1>
                            <p className={styles.text}>
                                The FIXD sensor and free app tells you why your check engine light is on to help you save time and money
                            </p>
                            <button className={styles.button}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AaronHero;