import { count } from 'console';
import React from 'react'
import { getAnxiousToAdventurousPosts, getMemberingMariPosts, getMyWalkingShoesPosts } from '../pages/api';
import styles from './LatestFrom.module.css'

interface latestFromProps {
  blog: string;
}

interface latestFromPostProps {
  title: string;
  blurb: string;
  postedDate: string;
  deepLink: string;
}

interface post {
  ID: number;
  URL: string;
  attachment_count: number;
  attachments: object;
  author: object;
  capabilities: object;
  categories: object;
  content: string;
  date: string;
  discussion: object;
  excerpt: string;
  featured_image: string;
  format: string;
  geo: boolean;
  global_ID: string;
  guid: string;
  i_like: boolean;
  is_following: boolean;
  is_reblogged: boolean;
  like_count: number;
  likes_enabled: boolean
  menu_order: number;
  meta: object;
  metadata: Array<object>;
  modified: string;
  other_URLs: object;
  page_template: string;
  parent: boolean;
  password: string;
  post_thumbnail: object;
  publicize_URLs: Array<string>;
  sharing_enabled: boolean;
  short_URL: string;
  site_ID: number;
  slug: string;
  status: string;
  sticky: boolean;
  tags: object;
  terms: object;
  title: string;
  type: string;
}

const LatestFromPost = ({ title, blurb, postedDate, deepLink }:latestFromPostProps) => {
  return (
    <div className={styles.postBlock}>
      <div className={styles.postTitle} >{title}</div>
      <p>{blurb}</p>
      <a href={deepLink}>Continue Reading</a>
      <div className={styles.postDate}>{postedDate}</div>
    </div>
  )
}

export { LatestFromPost }

const LatestFrom = ({ blog }:latestFromProps) => {
  const latestPosts: Array<post> | null = getLatestPosts(blog);
  console.log('12345');
  if (!latestPosts) {
    return null;
  }
  return (
    <div className={styles.blogBlurb}>
      Read the latest from {blog}
      <LatestFromPost
        title={latestPosts[0].title}
        blurb={latestPosts[0].excerpt}
        postedDate={latestPosts[0].date}
        deepLink={latestPosts[0].URL}
      />
      <LatestFromPost
        title={latestPosts[1].title}
        blurb={latestPosts[1].excerpt}
        postedDate={latestPosts[1].date}
        deepLink={latestPosts[1].URL}
      />
      <LatestFromPost
        title={latestPosts[2].title}
        blurb={latestPosts[2].excerpt}
        postedDate={latestPosts[2].date}
        deepLink={latestPosts[2].URL}
      />
    </div>
  );
}

const getLatestPosts = (blog:string) => {
  switch (blog) {
    case 'memberingMari': 
      return getMemberingMariPosts(3);
    case 'anxiousToAdventurous':
      return getAnxiousToAdventurousPosts(3);
    case 'myWalkingShoes':
      return getMyWalkingShoesPosts(3);
    default:
      return null;
  }
}

export default LatestFrom