import React from 'react';

import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) =>  (
  // flex jca aic flex direcction: column border-radius: 10px
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
                    // flex jcc aic
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
                      {/* flex aic */}
      <div className={`${styles.subSection} flex-col text-center`}>
        
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>ProNef has been developed using a cross-platform technology, React Native.</p>
        </div>
                      {/* flex jcc flex-wrap */}
        <div className={`${styles.flexWrap}`}>
          <FeatureCard iconUrl={ assets.react } iconText="React Native"/>
          <FeatureCard iconUrl={ assets.javascript } iconText="Javascript"/>
        </div>
      </div>
    </div>
  )
}

export default Features