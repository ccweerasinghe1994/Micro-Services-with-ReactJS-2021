import axios from "axios";
import React, { useState } from "react";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">new comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default CommentCreate;
