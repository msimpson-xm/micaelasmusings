import React from 'react'
import styles from './LatestFrom.module.css'

interface props {
  blog: string;
}

const LatestFrom = ({blog}:props) => {
  return (
    <div className={styles.blogBlurb}>
      Read the latest from {blog}
    </div>
  );
}

export default LatestFrom