import React from 'react';
import FeaturedPosts from '../components/home-page/featured-post';
import Hero from '../components/home-page/hero';
const DUMMYDATA = [
  {
    title: 'Sameh',
    image: 'p.jpg',
    excerpt: 'i love sameh',
    date: '1998-10-11',
    slug: 'sameh-is-gamed',
  },
  {
    title: 'Sameh',
    image: 'p.jpg',
    excerpt: 'i love sameh',
    date: '1998-10-11',
    slug: 'sameh-is-gamed',
  },{
    title: 'Sameh',
    image: 'p.jpg',
    excerpt: 'i love sameh',
    date: '1998-10-11',
    slug: 'sameh-is-gamed',
  },
];
const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMYDATA} />
    </React.Fragment>
  );
};

export default HomePage;
