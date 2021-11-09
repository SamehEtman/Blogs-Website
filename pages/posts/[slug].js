import PostDetails from '../../components/posts/post-detail/post-content';
import { getPostData, getAllFilenamesSlugs } from '../../lib/posts-util';
const DUMMYDATA = {
  title: 'Sameh',
  image: 'p.jpg',
  excerpt: 'i love sameh',
  date: '1998-10-11',
  slug: 'sameh-is-gamed',
  content: '# Hello iam sameh',
};
const PostDetailPage = () => {
  return (
    <div>
      <PostDetails post={DUMMYDATA} />
    </div>
  );
};

export function getStaticProps(context) {
  const slug = context.params.slug;
  const post = getPostData(slug);
  return {
    props: {
      post,
    },
    revalidate: 1800,
  };
}

export function getStaticPaths() {
  const allSlugs = getAllFilenamesSlugs();
  const params = allSlugs.map((slug) => {
    return { params: { slug } };
  });
  return {
    paths: params,
    fallback: false,
  };
}
export default PostDetailPage;
