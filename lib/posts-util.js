import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsPath = path.join(process.cwd(), 'posts');

const getPostData = (postName) => {
  const postPath = path.join(postsPath, postName);
  const postFile = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(postFile);
  const slug = postName.replace(/\.md$/, '');
  const postData = {
    slug,
    ...data,
    content,
  };
  return postData;
};
export const getAllPosts = () => {
  const posts = fs.readdirSync(postsPath);
  const allPosts = posts.map((post) => getPostData(post));
  return allPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};
