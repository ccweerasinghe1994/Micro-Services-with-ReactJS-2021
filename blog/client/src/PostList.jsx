import axios from "axios";
import React, { useState, useEffect } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
const PostList = () => {
  const [postList, setPostList] = useState({});
  const getPostList = async () => {
    const posts = await axios.get("http://localhost:4000/posts");
    setPostList(posts.data);
  };

  useEffect(() => {
    getPostList();
  }, []);

  const renderedObjects = Object.values(postList).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedObjects}
    </div>
  );
};

export default PostList;
