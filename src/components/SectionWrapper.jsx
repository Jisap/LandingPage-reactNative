import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';


const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (
    // flex jcc aic min-height: 100vh
    <div className={`min-h-screen ${ styles.section }
                      ${ reverse ? styles.bgWhite : styles.bgPrimary } 
                      ${ banner }
                    `
    }>
                    {/* flex aic flex-row */}
      <div className={`flex items-center 
                       ${ reverse ? styles.boxReverseClass : styles.boxClass } 
                       w-11/12 sm:w-full minmd:w-3/4
                      `
      }>
                        {/* flex:1 justify start flex-col  */}
        <div className={`${styles.descDiv} 
                         ${ reverse ? "fadeRightMini" : "fadeLeftMini" }
                         ${ reverse ? styles.textRight : styles.textLeft }
                        `
        }>
                          {/* Tipo y Tamaños de letra */}
          <h1 className={`
            ${styles.h1Text}
            ${reverse ? styles.blackText : styles.whiteText}
            `
          }>
            { title }
          </h1>
          <p className={`
            ${styles.descriptionText}
            ${reverse ? styles.blackText : styles.whiteText}
          `
          }>
            { description }
          </p>
          { showBtn &&(
            <Button 
              assetUrl={assets.expo}
              link="deployed nft marketplace rn"
            />
          )}
        </div>

        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img 
            src={ mockupImg } 
            alt="mockup" 
            className={`
              ${ styles.sectionImg }
              ${ reverse ? "fadeLeftMini" : "fadeRightMini" }
            `  
            }/>
        </div>

      </div>
    </div>
  )
}

export default SectionWrapper