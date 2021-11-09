import PostItem from './post-item';
import classes from './posts-grid.module.css';
const PostsGrid = (props) => {
  const { posts } = props;
  const renderPosts = () => {
    return posts.map((post) => {
      return <PostItem key={post.slug} post={post} />;
    });
  };
  if (!posts) return <p>Loading ... </p>
  return <ul className={classes.grid}>{renderPosts()}</ul>;
};
export default PostsGrid;
