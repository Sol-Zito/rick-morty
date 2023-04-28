import React from "react";
import "./layout.css";
import { Avatar, List, ListItemButton, ListItemIcon } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className="container-footer">
      <Avatar
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXUqXT2jU4PP6X0WdsTueW7xHEBQ6awDrLA&usqp=CAU"
        alt="logo"
      />
      <List
        style={{
          width: "33%",
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "flex-end",
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <WhatsAppIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FacebookIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <InstagramIcon />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </div>
  );
};

export default Footer;
