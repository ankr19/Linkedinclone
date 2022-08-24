import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventIcon from "@mui/icons-material/Event";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "../../CSS/feed.css";
import Post from "../Post/Post";
import { db } from "../../Firebase1";
import firebase from 'firebase/compat/app';
const Feed = () => {
  const [input, setInput] = useState();
  const [posts, setPost] = useState([]);
  const handleSubmit= (e)=>{
    e.preventDefault();
    db.collection("posts").add({
      nameUser: "Anand Kumar",
      description: "This is test description",
      message: input,
      photoURL: "data:image/jpeg;base64,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",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
  }
  console.log(posts)
  useEffect(()=>{
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot=>{
      setPost(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })
  },[])

  return (
    <div className="feed">
      <div className="feed_input">
        <div className="feed_form">
          <Avatar />
          <form onSubmit={handleSubmit}>
            <input type="text" id="post" value={input} onChange={(e)=> setInput(e.target.value)} placeholder="Start a post" />
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
      {
        posts.map(({id, data:{nameUser,description, message, photoURL}})=>{
          return (<Post key={id} name={nameUser} description={description} message={message} photoURL={photoURL} />);
        })
      }
    </div>
  );
};

export default Feed;
