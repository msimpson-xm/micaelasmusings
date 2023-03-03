import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import homePage from './homePage.jpg'
import SocialsBar from './SocialsBar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MemberingMari from '../../pages/MemberingMari'
import AnxiousToAdventurous from '../../pages/AnxiousToAdventurous'
import MyWalkingShoes from '../../pages/MyWalkingShoes'
import Home from '../../pages/Home'
import About from '../../pages/About'

// TODO consider using next's builtin navigation

const Navbar = () => {
  return (
    <div>
      <SocialsBar />
      <div className={styles.headerContainer}>
        <Image src={homePage} alt='Micaelas Musings' />
        <div className={styles.overlayText}>MICAELAS MUSINGS</div>
      </div>

      <Router>
        <div>
          <nav>
            <ul>
              <li className={styles.navbarItem}>
                <Link to='/'>Home</Link>
              </li>
              <li className={styles.navbarItem}>
                <Link to='/about'>About</Link>
              </li>
              <li className={styles.navbarItem}>
                <Link to='/memberingmari'>Membering Mari</Link>
              </li>
              <li className={styles.navbarItem}>
                <Link to='/anxioustoadventurous'>Anxious to Adventurious</Link>
              </li>
              <li className={styles.navbarItem}>
                <Link to='/mywalkingshoes'>My Walking Shoes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/memberingmari' element={<MemberingMari />} />
            <Route path='/anxioustoadventurous' element={<AnxiousToAdventurous />} />
            <Route path='/mywalkingshoes' element={<MyWalkingShoes />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default Navbar
