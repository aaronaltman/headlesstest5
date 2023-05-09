import { useRouter } from 'next/router';

import ExternalPost from '/components/ExternalPost/ExternalPost.js';

const ExternalBlogPost = () => {
    const router = useRouter();
    const { slug } = router.query;

    return <ExternalPost slug={slug} />;
};

export default ExternalBlogPost;
