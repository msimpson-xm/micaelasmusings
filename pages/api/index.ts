import https from 'https';

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


const getAnxiousToAdventurousPosts = (count=3): Array<post> | null => {
  return getPosts('Anxious%20to%20Adventurous', count);
}

const getMemberingMariPosts = (count=3): Array<post> | null => {
  return getPosts('%27membering%20Mari', count);
}

const getMyWalkingShoesPosts = (count=3): Array<post> | null => {
  return getPosts('My%20Walking%20Shoes', count);
}

const getPosts = (encodedCategory: string, count=0): Array<post> | null => {
  if (count !== 0) {
    https.get(`https://public-api.wordpress.com/rest/v1.1/sites/micaelasmusingsca.wordpress.com/posts/?number=${count}&category=${encodedCategory}`, res => {
      let data: string[] = [];
    
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        data.push(chunk);
      });
    
      res.on('end', () => {
        console.log(JSON.parse(data.join('')));
        return JSON.parse(data.join('')).posts;
      });
    }).on('error', err => {
      console.log('Error: ', err.message);
      return null;
    });
  } else {
    https.get(`https://public-api.wordpress.com/rest/v1.1/sites/micaelasmusingsca.wordpress.com/posts/?number=${count}&category=${encodedCategory}`, res => {
      let data: string[] = [];
    
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        data.push(chunk);
      });
    
      res.on('end', () => {
        console.log(JSON.parse(data.join('')));
        return JSON.parse(data.join('')).posts;
      });
    }).on('error', err => {
      console.log('Error: ', err.message);
      return null;
    });
  }
  return null;
}

export { getAnxiousToAdventurousPosts, getMemberingMariPosts, getMyWalkingShoesPosts };
