import React from 'react'
import Image from 'next/image'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import github from './github.png'
import styles from './SocialsBar.module.css'

const SocialsBar = () => {
  return (
    <div className={styles.socialsBar}>
      <a href='https://www.instagram.com/micaelasmusings/' className={styles.socialsBarItem}><Image src={instagram} alt='Instagram' width={15} height={15} /></a>
      <a href='https://www.linkedin.com/in/micaela-simpson-714a7510a/' className={styles.socialsBarItem}><Image src={linkedin} alt='LinkedIn' width={15} height={15} /></a>
      <a href='https://github.com/msimpson-xm' className={styles.socialsBarItem}><Image src={github} alt='Github' width={15} height={15} /></a>
    </div>
  );
}

export default SocialsBar