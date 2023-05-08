import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ExternalPost = ({ post }) => {
    const { id, uri, title, featuredImage } = post;

    return (
        <div key={id}>
            <h2>
                <Link href={`/external-blog${uri}`}>
                    <a>{title}</a>
                </Link>
            </h2>
            {featuredImage && (
                <Image src={featuredImage.node.sourceUrl} alt={title} width={335} height={235} />
            )}
        </div>
    );
};

export default ExternalPost;
