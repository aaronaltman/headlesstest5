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
                                src="https://bpheadlesst962.wpengine.com/wp-content/uploads/2023/05/pexels-pixabay-73871-scaled.jpeg"
                                alt="Fixdapp way of fixing cars"
                                width={1024}
                                height={685}
                            />
                        </div>
                    </div>
                    <div className={styles.rightCol}>
                        <div className={styles.content}>
                            <h1 className={styles.heading}>UNLEASH THE FULL POTENTIAL OF YOUR WORDPRESS SITE</h1>
                            <p className={styles.text}>
                                Your website is your most valuable digital asset. Let us help you unlock its full potential with our expertise in headless WordPress development. We create seamless and engaging digital experiences that convert visitors into customers. Save time and money while we build a website that elevates your brand and drives results.
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