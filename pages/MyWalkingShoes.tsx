import DisplayPost from '../components/DisplayPost'
import styles from '../styles/BlogPage.module.css'
import { selectMWSBlogsState, getMyWalkingShoesPosts } from '../reducers/postsReducer'
import { AppDispatch } from '../reducers/store'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'

const MyWalkingShoes = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getMyWalkingShoesPosts())
  }, [dispatch]);

  const posts = useSelector(selectMWSBlogsState);

  return (
    <div>
      <div  className='container'>
        <div className={styles.preambleText}>
          <p>Welcome to the newest addition to my blog! Playing off the saying “walk a mile in their shoes”, My Walking Shoes is where I will be giving you insight into what it might be like to walk a mile in my shoes. Here I delve into the nitty gritty of my thoughts and adventures. I will open up about my opinions and my plans to spend a lot of time outside. I hope you stay a while and get the opportunity to walk a mile in My Walking Shoes.</p>
        </div>
        {posts.map((post) => (
          <DisplayPost key={post.ID} title={post.title} blurb={post.excerpt} slug={post.slug} />
        ))}
      </div>
    </div>
  )
}

export default MyWalkingShoes;
