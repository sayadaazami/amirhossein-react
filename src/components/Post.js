import React from "react";

function Post({ post }) {
  return (
    <section key={post.id}>
      <header>
        <h2>{post.title}</h2>
      </header>
      <main>{post.body}</main>
    </section>
  );
}

export default Post;
