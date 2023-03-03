import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import LatestFrom from '../components/LatestFrom'

const Home: NextPage = () => {
  return (
    <div className='container'>
      HERE IS SOME CONTENT 
      <div className={styles.homePage}>
        <LatestFrom blog='memberingMari' />
        <LatestFrom blog='anxiousToAdventurous' />
        <LatestFrom blog='myWalkingShoes' />
      </div>
    </div>
  )
}

export default Home
