import Head from 'next/head'
import Navbar from '../components/Navigation/Navbar'
import DisplayPost from '../components/DisplayPost'
import styles from '../styles/BlogPage.module.css'
import { post } from './Interfaces'
import { connect, ConnectedProps } from 'react-redux'

interface rootState {
  myWalkingShoes: {
    posts: Array<post>
  }
}

// TODO CREATE REDUX STORE AND IMPLEMENT ITS USE SO THIS PAGE CAN BE POPULATED

const MyWalkingShoes = (props: PropsFromRedux) => {
  return (
    <div>
      <div  className='container'>
        <div className={styles.preambleText}>
          <p>Welcome to the newest addition to my blog! Playing off the saying “walk a mile in their shoes”, My Walking Shoes is where I will be giving you insight into what it might be like to walk a mile in my shoes. Here I delve into the nitty gritty of my thoughts and adventures. I will open up about my opinions and my plans to spend a lot of time outside. I hope you stay a while and get the opportunity to walk a mile in My Walking Shoes.</p>
        </div>
        {props.posts.map((post) => (
          <DisplayPost key={post.ID} title={post.title} blurb={post.excerpt} slug={post.slug} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state: rootState) => {
  return {
    posts: state.myWalkingShoes.posts
  };
}

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(MyWalkingShoes);
