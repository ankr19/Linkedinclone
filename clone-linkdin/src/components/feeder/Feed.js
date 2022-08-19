import { Avatar } from "@mui/material";
import React from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventIcon from "@mui/icons-material/Event";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "../../CSS/feed.css";
import Post from "../Post/Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_input">
        <div className="feed_form">
          <Avatar />
          <form action="">
            <input type="text" placeholder="Start a post" />
            <button type="submit">submit</button>
          </form>
        </div>
        <div className="feed_option">
          <div className="option">
            <PhotoLibraryIcon style={{ color: "#70b5f9" }} />
            <span className="d-sm-none d-md-block d-md-none d-lg-block">
              photo
            </span>
          </div>
          <div className="option">
            <VideoLibraryIcon style={{ color: "#7fc15e" }} />
            <span className="d-sm-none d-md-block d-md-none d-lg-block">
              Video
            </span>
          </div>
          <div className="option">
            <EventIcon style={{ color: "#e7a33e" }} />
            <span className="d-sm-none d-md-block d-md-none d-lg-block">
              Event
            </span>
          </div>
          <div className="option">
            <AssignmentIcon style={{ color: "#fc9295" }} />
            <span className="d-sm-none d-md-block d-md-none d-lg-block">
              Write Your Article
            </span>
          </div>
        </div>
      </div>

      <Post/>
      <Post/>
      <Post/>
      <Post/>

    </div>
  );
};

export default Feed;
