import React from "react";
import { Switch, Route } from "react-router-dom";
import Post from "../components/Post";

const posts = [
  { id: 1, title: "post 1", body: "dkfkjdhfakjsdkjfhaskjdhfkjaksjdhfj" },
  { id: 2, title: "post 2", body: "dkfkjdhfakjsdkjfhaskjdhfkjaksjdhfj" },
  { id: 3, title: "post 3", body: "dkfkjdhfakjsdkjfhaskjdhfkjaksjdhfj" },
  { id: 4, title: "post 4", body: "dkfkjdhfakjsdkjfhaskjdhfkjaksjdhfj" },
];

function PageBlog(props) {
  console.log(props, props.match.params.id);

  return (
    <section>
      <h1>Blog</h1>

      <Switch>
        {posts.map((post) => (
          <Route
            key={post.id}
            path={`${props.match.path}/${post.id}`}
            component={() => <Post post={post} />}
          />
        ))}

        <Route render={() => "post not found"} />
      </Switch>

      {/* {posts
        .filter((item) => item.id === +props.match.params.id)
        .map((post) => (
          <Post post={post} />
        ))} */}
    </section>
  );
}

export default PageBlog;
