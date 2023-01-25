import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import FullScreenDialog from "../Search/SearchDialog";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
const useStyles = createUseStyles({
  header: {
    backgroundColor: "#3a3330",
    width: "100%",
    height: 60,
    header: {},
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "white",
    fontSize: 27,
  },
  headerTopRight: {
    display: "flex",
    justifyContent: "space-between",
    width: 90,
    marginRight: 12,
  },
  searchIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  headerTopLeft: { marginLeft: 15 },
});

function Home() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <div className={classes.headerTopLeft}>
          <img src="/img/menu.png" width={23} height={23} />
        </div>
        <div className={classes.name}>
          <Link to="/">
            <img src="/img/bork.jpg" width={100} height={25} />
          </Link>
        </div>
        <div className={classes.headerTopRight}>
          <ProfileIcon />
          <img src="/img/bag.png" width={23} height={23} />
          <img
            src="/img/search.png"
            width={23}
            height={23}
            className={classes.searchIcon}
            onClick={handleClickOpen}
          />
        </div>
      </div>
      <FullScreenDialog
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
      />
    </div>
  );
}

export default Home;
