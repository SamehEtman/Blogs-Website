import AllPosts from '../../components/posts/all-posts';
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
  },
  {
    title: 'Sameh',
    image: 'p.jpg',
    excerpt: 'i love sameh',
    date: '1998-10-11',
    slug: 'sameh-is-gamed',
  },
];
const AllPostsPage = () => {
  return (
    <section>
      <AllPosts posts = {DUMMYDATA}/>
    </section>
  );
};

export default AllPostsPage;
