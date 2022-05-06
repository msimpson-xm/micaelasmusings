import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import homePage from './homePage.jpg'
import NavButton from './NavButton'
import SocialsBar from './SocialsBar'

const Navbar = () => {
  return (
    <div>
      <SocialsBar />
      <div className={styles.headerContainer}>
        <Image src={homePage} alt='Micaelas Musings' />
        <div className={styles.overlayText}>MICAELAS MUSINGS</div>
      </div>
      
      <div className={styles.navigationItems}>
        <NavButton label="Home" />
        <NavButton label="About" />
        <NavButton label="membering Mari" />
        <NavButton label="Anxious to Adventurous" />
        <NavButton label="My Walking Shoes" />
      </div>
    </div>
  )
}

export default Navbar
