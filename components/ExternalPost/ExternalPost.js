import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ExternalPost = ({ post }) => {
    if (!post) {
        return <p>No post data</p>;
    }

    const { id, uri, title, featuredImage } = post;

    if (!id || !uri || !title) {
        return <p>Post data is missing important fields</p>;
    }

    return (
        <div key={id}>
            <h2>
                <Link href={`/external-blog/${uri}`}>
                    <a>{title}</a>
                </Link>
            </h2>
            {featuredImage ? (
                <Image src={featuredImage.node.sourceUrl} alt={title} width={335} height={235} />
            ) : (
                <p>No featured image for this post</p>
            )}
        </div>
    );
};

export default ExternalPost;
