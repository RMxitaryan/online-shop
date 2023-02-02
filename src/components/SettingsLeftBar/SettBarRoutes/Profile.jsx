import React from "react";
import Home from "../../HomePage/Home";
import AccSettBar from "../AccSettBar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Profile: {
    display: "flex",
    flexDirection: "row",
    // height: "90.8vh",
  },
  leftBar: {
    // justifyContent: "start",
    // justifyItems: "start",
    width: "30vh",
  },
  rightBar: {
    // flex: 9,
  },
});

function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.Profile}>
      <div className={classes.leftBar}>
        <AccSettBar name={"Tigran"} surname={"Gevorgyan"} />
      </div>
      <div className={classes.rightBar}></div>
    </div>
  );
}

export default Profile;
