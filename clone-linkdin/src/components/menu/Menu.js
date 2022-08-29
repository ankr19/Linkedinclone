import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

const Menu = ({ Icon, title, avatar }) => {
  const user = useSelector(selectUser);
  return (
    <div className="container ">
      <div className="text-center"style={{ cursor: "pointer" }}>
        {avatar && (
          <Avatar
            name={avatar}
            src={user.photoURL}
            style={{ margin: "0px auto", objectFit: "contain" }}
          />
        )}
        {Icon && <Icon></Icon>}
        <div className="">
          <span className="m">{title}</span>
        </div>
      </div>
      {/* <ul className="nav nav-pills mx-1">
        <li className="nav-item position-relative">
          {avatar && <Avatar name={avatar} />}
          {Icon && <Icon></Icon>}
          <span className="d-inline-flex">{title}</span>
        </li>
      </ul> */}
    </div>
  );
};

export default Menu;
// border-3 border-bottom
