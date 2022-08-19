import { Avatar } from "@mui/material";
import React from "react";

const Menu = ({ Icon, title, avatar }) => {
  return (
    <div className="container text-center">
      <div >
        {avatar && <Avatar name={avatar} style={{margin:"0px auto",objectFit:"contain"}}/>}
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
