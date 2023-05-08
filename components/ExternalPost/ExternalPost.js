import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from 'next/image'

const ExternalPost = ({ post }) => {
    const { id, uri, content, date, featuredImage, categories } = post;

    return (
        <div key={id}>
            <h2>
                <Link href={`/external-blog${uri}`}>
                    <a>{content}</a>
                </Link>
            </h2>
            <p>{date}</p>
            {featuredImage && (
                // Replace the <img> tag with the Next.js Image component
                <Image
                    src={featuredImage.node.sourceUrl}
                    alt=""
                    width={353} // Set the width you want for the image
                    height={253} // Set the height you want for the image
                    layout="responsive"
                />
            )}
            <ul>
                {categories.edges.map(({ node: category }) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExternalPost;

