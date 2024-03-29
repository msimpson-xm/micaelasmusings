import Head from 'next/head'
import { connect, ConnectedProps } from 'react-redux';

import Navbar from '../components/Navigation/Navbar'
import DisplayPost from '../components/DisplayPost'
import styles from '../styles/BlogPage.module.css'
import { post } from './Interfaces';

interface rootState {
  anxiousToAdventurous: {
    posts: Array<post>
  }
}

// TODO CREATE REDUX STORE AND IMPLEMENT ITS USE SO THIS PAGE CAN BE POPULATED

const AnxiousToAdventurous = (props: PropsFromRedux) => {
  return (
    <div>
      <div  className='container'>
        <div className={styles.preambleText}>
          <p>Hello there!</p>
          <p>This part of my site covers one of my favourite aspects of my life: Scotia. Scotia is my adventure buddy, partner in crime and roomie forever. Through this blog, I will be recounting our experiences together as I aid Scotia in her journey from the anxious, untrusting pup she came to me as to the confident, spunky gal she is becoming. Full disclosure, I am a crazy advocate for my dog. I believe in positive reinforcement, keeping training at her pace, and building a loving trusting relationship with my dog. I like to think of Scotia as a person that I have agreed to help. She is a huge part of my life and I am here to help her live her best life.</p>
          <p>Scotia came to me September 28, 2019. She is a 17lb party-mixed breed. She has a natural mohawk down her spine and her ears occasionally make her look like yoda. She is a silent pup with all the spunk you can imagine.</p>
          <p>What you will find in the posts below is our journey: training, learning, setbacks, trying new things, and my take on how a dog/owner relationship should be. I don’t know tons, so what I share is simply my side. I try to post on the 14th and 28th of each month. I hope you join us on this beautiful journey we are on.</p>
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
    posts: state.anxiousToAdventurous.posts
  };
}

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(AnxiousToAdventurous);
