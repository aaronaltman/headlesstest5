import NewPosts from '/components/NewPosts/NewPosts.js';

import Header from "../components/Header";

import React from "react";

export default function ExternalBlog() {
    return (
        <>
    <Header />
        <div>
            <h1>External Blog</h1>
            <h2>Heck YEAH</h2>
            <NewPosts />
        </div>
        </>
    );
}
