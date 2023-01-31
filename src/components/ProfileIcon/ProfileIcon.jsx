import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createUseStyles } from "react-jss";
import { Link, useNavigate } from "react-router-dom";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { auth } from "../../config/Config";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/actions";
const useStyles = createUseStyles({
  profileIcone: {
    cursor: "pointer",
    color: "white",
    height: 30,
    width: 30,
  },
  link: {
    textDecoration: "none",
    color: "#3a3333",
    "&:hover": {
      color: "#3a3333",
    },
  },
});

function ProfileIcon({ setOpenHome }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   auth.onAuthStateChanged((user) => {
  //     console.log(user.email);
  //     dispatch(setUser())
  //   });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AccountCircleOutlinedIcon
        className={classes.profileIcone}
        src="/img/user.png"
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
        <Link to="signin/profile" className={classes.link}>
          {
            <MenuItem
              onClick={() => {
                handleClose();
                setOpenHome(false);
              }}
            >
              Profile
            </MenuItem>
          }
        </Link>
        <Link to="/favourite" className={classes.link}>
          {
            <MenuItem
              onClick={() => {
                handleClose();
                setOpenHome(false);
              }}
            >
              Favourite
            </MenuItem>
          }
        </Link>
        <Link to="/about" className={classes.link}>
          {
            <MenuItem
              onClick={() => {
                handleClose();
                setOpenHome(false);
              }}
            >
              About
            </MenuItem>
          }
        </Link>
        <MenuItem
          onClick={() => {
            auth.signOut();
            dispatch(setUser({}));
            return navigate("/");
          }}
        >
          Log out
        </MenuItem>
      </Menu>
    </>
  );
}

export default ProfileIcon;
