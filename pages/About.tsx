import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navigation/Navbar'
import styles from '../styles/About.module.css'
import { getPosts } from './api/index';

const About: NextPage = () => {
  getPosts('Anxious%20to%20Adventurous');
  getPosts('%27membering%20Mari');
  getPosts('My%20Walking%20Shoes');
  return (
    <div>
      <div  className='container'>
        <div className={styles.aboutInfo}>
          <p>Hello,</p>
          <p>My name is Micaela. I am a 26 year old software developer in Kelowna, Canada. That is one way to define myself anyway. I also go by dog Momma to my little rescue pup, Scotia, sibling to 6 earthly humans and 1 angel, lover of the forrest, ocean, and mountaintops, and daughter of some pretty incredible parents. I like to spend time outside with the people and furry friends I care about most. I feel very drawn to the ocean and I adore the water.</p>
          <p>My inspiration for this page stems from the loss of my little sister, Marisa, in December of 2019. I have often considered creating a personal webpage of sorts; however, aside from having a convenient display of some of my technical abilities (if that), I didn’t have a lot of reason for one and we all know how that goes. After Marisa’s passing, I realized how strongly I felt about having some way to remember everything and share who she was with those who didn’t have the opportunity to meet her. Writing it down was alright, but I wanted to share it. Thus the birth of this page. Since conception, I have had many ideas of how I would like to grow this page into something more, but for now it’s pretty simple.</p>
          <p>Anyway, that is a lot of chatter about me… But I suppose you did sign up for that when you clicked on this page. You can find more about me and what goes on inside my brain as you explore through this website I created for people like you!</p>
          <p>Micaela (she/her)</p>
        </div>
      </div>

    </div>
  )
}

export default About
