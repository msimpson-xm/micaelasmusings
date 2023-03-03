import https from 'https';
import { post } from '../Interfaces';

const getPosts = (encodedCategory: string, count=0): Array<post> | null => {
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
  return null;
}

export { getPosts };
