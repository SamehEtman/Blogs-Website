import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = (props) => {
  return (
    <section>
      <AllPosts posts={props.posts} />
    </section>
  );
};
export function getStaticProps() {
  const AllPosts = getAllPosts();
  return {
    props: {
      posts: AllPosts,
    },
    revalidate: 1800,
  };
}

export default AllPostsPage;
