import React from "react";
import image1 from "../../image/LinkedInSymbole.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Menu from "../menu/Menu";

import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

const Header = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="container" style={{ fontSize: "13px" }}>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={image1}
              alt=""
              width="50"
              className="d-inline-block align-text-top"
            />
            TAB
          </a>
          <div className="bg-white d-none d-sm-block d-sm-none d-md-block mx-4">
            <SearchIcon />
            <input type="text" placeholder="search" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <Menu Icon={HomeIcon} title={"Home"} />
            <Menu Icon={PeopleIcon} title={"Network"} />
            <Menu Icon={BusinessCenterIcon} title={"Jobs"} />
            <Menu Icon={MessageIcon} title={"Message"} />
            <Menu Icon={NotificationsIcon} title={"Notification"} />
            <Menu Icon={Avatar} title={user.displayName} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
