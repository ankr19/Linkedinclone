import { Avatar } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import "../../CSS/post.css";
const Post = ({name, description, message, photoURL}) => {
  return (
    <div className="posts my-2">
      <div className="post_header">
        <div className="post_headerLeft">
          <Avatar src={photoURL} />
          <div className="post_name">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post_body my-3 mx-2">
        <p>{message}</p>
      </div>
      <div className="post_footer">
        <div className="post_footOption">
          <ThumbUpIcon />
          <span>Like</span>
        </div>
        <div className="post_footOption">
          <CommentIcon />
          <span>Comment</span>
        </div>
        <div className="post_footOption">
          <ShareIcon />
          <span>Share</span>
        </div>
        <div className="post_footOption">
          <SendIcon />
          <span>Post</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
