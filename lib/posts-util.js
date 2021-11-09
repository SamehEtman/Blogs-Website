import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsPath = path.join(process.cwd(), 'posts');

export const getPostData = (postName) => {
  const slug = postName.replace(/\.md$/, '');

  const postPath = path.join(postsPath, `${slug}.md`);
  const postFile = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(postFile);
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
export const getAllFilenamesSlugs = () => {
  const fileNames = fs.readdirSync(postsPath);
  return fileNames.map((name) => name.replace(/\.md$/, ''));
};
export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};
