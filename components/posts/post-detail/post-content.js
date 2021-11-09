import image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';
const PostDetails = (props) => {
  const imagePath = `/images/posts/${props.post.image}`;
  console.log(imagePath);
  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={props.post.title} />
      <ReactMarkdown>{props.post.content}</ReactMarkdown>
    </article>
  );
};

export default PostDetails;
