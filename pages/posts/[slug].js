import PostDetails from '../../components/posts/post-detail/post-content';
const DUMMYDATA = {
  title: 'Sameh',
  image: 'p.jpg',
  excerpt: 'i love sameh',
  date: '1998-10-11',
  slug: 'sameh-is-gamed',
  content : '# Hello iam sameh'
};
const PostDetailPage = () => {
  return (
    <div>
      <PostDetails post={DUMMYDATA} />
    </div>
  );
};

export default PostDetailPage;
