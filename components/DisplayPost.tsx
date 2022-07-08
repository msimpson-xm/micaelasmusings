import React from 'react';
import Link from 'next/link'
import ReactHtmlParser from 'react-html-parser'; 

type props = {
  title: string,
  blurb: string,
  slug: string,
};

const DisplayPost = ({ title, blurb, slug }: props) => {
  return (
    <div>
      <Link href={`/memberingMari/${encodeURIComponent(slug)}`} passHref><h3>{title}</h3></Link>
      { ReactHtmlParser (blurb) }
      <hr />
    </div>
  );
}

export default DisplayPost;