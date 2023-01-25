import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createUseStyles } from "react-jss";
import { Routes } from "react-router";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  profileIcone: {
    cursor: "pointer",
  },
});

function ProfileIcon() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <img
        className={classes.profileIcone}
        src="/img/user.png"
        height={23}
        width={23}
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Link to="/profile">
          {<MenuItem onClick={handleClose}>Profile</MenuItem>}
        </Link>
        <Link to="/favourite">
          {<MenuItem onClick={handleClose}>Favourite</MenuItem>}
        </Link>
        <Link to="/about">
          {<MenuItem onClick={handleClose}>About</MenuItem>}
        </Link>
      </Menu>
    </>
  );
}

export default ProfileIcon;
