import { Avatar } from "@mui/material";
import React from "react";
import "../../CSS/sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="card" style={{ width: "15rem" }}>
        <img
          src="https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"
          className="card-img-top"
          alt="..."
          style={{ height: "60px", widht: "100%", marginBottom: "-30px" }}
        />
        <div className="card-body add" style={{ margin: "0px auto" }}>
          <Avatar
            style={{ height: "50px", width: "50px", margin: "0px auto" }}
          />
          <h4>Anand Kumar</h4>
          <p>Frontend Developer</p>
        </div>
        
      </div>
      <div className="sidebar_recent">
          <p>recent</p>
          <p className="hash">
            <span>#</span>branding
          </p>
          <p className="hash">
            <span>#</span>Programming
          </p>
          <p className="hash">
            <span>#</span>marketing
          </p>
        </div>
    </div>
  );
};

export default Sidebar;
