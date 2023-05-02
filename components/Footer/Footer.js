import React from 'react';
import Image from 'next/image';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
      <footer>
        <div className={styles.aaroncontainer}>
          <div className={""}>
            <div className={styles.footercontainer}> {/* Add this line */}
              <div className={styles.col1}>
                <div className={styles.imagewrap}>
                  <Image
                      src="https://bpheadlesst962.wpengine.com/wp-content/uploads/2023/05/fixdapp-logo.webp" // The path to your image file
                      alt="LOGO" // A brief description of the image for accessibility
                      width={150} // Width of the image
                      height={48} // Height of the image
                  />
                </div>
              </div>
              <div className={styles.col2}>
                <p className={styles.siteDescription}>About</p>
                <ul className={styles.uaaronlist}>
                  <li>About FIXD</li>
                  <li>Careers</li>
                  <li>Press</li>
                  <li>Reviews</li>
                </ul>
              </div>
              <div className={styles.col3}>
                <p className={styles.siteDescription}>CONTACT US</p>
                <ul className={styles.uaaronlist}>
                  <li>(925) 854-1766</li>
                  <li>support@fixdapp.com</li>
                  <li>999 Peachtree St NE Suite 840, Atlanta, GA 30309</li>
                </ul>
              </div>
              <div className={styles.col4}>
                <p className={styles.siteDescription}>HELP</p>
                <ul className={styles.uaaronlist}>
                  <li>Help Center</li>
                  <li>Contact Support</li>
                  <li>FIXD app and sensor FAQ</li>
                  <li>Returns and warranty</li>
                  <li>Manage subscription</li>
                </ul>
              </div>
              <div className={styles.col5}>
                <p className={styles.siteDescription}>Legal</p>
                <ul className={styles.uaaronlist}>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Advertising Disclosure</li>
                </ul>
              </div>
            </div>
          </div>{/* Close the added div */}
        </div>
      </footer>
  );
};
