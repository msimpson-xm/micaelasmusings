import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from './logo.png'
import NavButton from './navButton'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Image src={logo} alt='Micaelas Musings' width={200} height={200} />
      <NavButton label="Home" />
      <NavButton label="About" />
      <NavButton label="membering Mari" />
      <NavButton label="Anxious to Adventurous" />
      <NavButton label="My Walking Shoes" />
    </div>
  )
}

export default Navbar
