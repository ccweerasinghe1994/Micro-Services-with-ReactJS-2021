import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  console.log(comments);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );
      setComments(response.data);
    };
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
