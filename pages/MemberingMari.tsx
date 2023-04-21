import Head from 'next/head'

import Navbar from '../components/Navigation/Navbar'
import DisplayPost from '../components/DisplayPost'
import styles from '../styles/BlogPage.module.css'
import { post } from './Interfaces'
import { connect, ConnectedProps } from 'react-redux'

interface rootState {
  memberingMari: {
    posts: Array<post>
  }
}

// TODO CREATE REDUX STORE AND IMPLEMENT ITS USE SO THIS PAGE CAN BE POPULATED

const MemberingMari = (props: PropsFromRedux) => {
  return (
    <div>
      <div  className='container'>
        <div className={styles.preambleText}>
          <p>This is the space I have created for myself and just so happened to share it with you! In this series I will muse over memories of my little sister. Through the stories, memories, and grief that I will chat about on here, I hope you laugh, cry, and most of all, never forget the beautiful soul we lost.</p>
          <p>Huge thank you to my beautiful Aunty Mer who has so graciously edited every one of the posts below and aided me in the process of forming these words in a way that helps you feel the feelings inside my soul.</p>
          <p>Enjoy!</p>
          {props.posts.map((post: post) => (
            <DisplayPost key={post.ID} title={post.title} blurb={post.excerpt} slug={post.slug} />
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: rootState) => {
  return {
    posts: state.memberingMari.posts
  };
}

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(MemberingMari);
