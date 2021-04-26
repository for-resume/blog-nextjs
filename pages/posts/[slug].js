import { Fragment } from 'react';
import Head from 'next/head';

import { getPostData, getPostsFiles } from '../../lib/posts-util';

import PostContent from '../../components/posts/post-detail/post-content';

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },

    // And here we could make a case
    // for adding revalidate.
    // Here, we're not going through all the posts.
    // We're fetching the data for a single post.
    // So this will be very fast.
    // And if we set revalidate to let's say 600 here,
    // then we ensure,
    // that if we ever updated a markdown file,
    // without rebuilding the entire application,
    // that then still,
    // we do get that latest data,
    // at least once every 10 minutes.
    // So that we don't have
    // to rebuild the entire application,
    // just because we fixed a typo
    // in one of our markdown files.
    // We could do this here, because here,
    // rebuilding after deployment,
    // will be much faster than if we do it
    // for the other pages,
    // where we have to go through all the post files,
    // which takes a bit longer.
    // And therefor would slow down,
    // some of the requests.
    // Here, it would not slow down the requests at all,
    // or not by much at least.
    // And we only do it once every 10 minutes anyways.

    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
