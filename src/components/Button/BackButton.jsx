import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  back: {
    padding: "12px 24px 12px 35px",
    fontSize: "11px",
    lineHeight: ".8",
    position: "relative",
    zIndex: "200",
    width: "100px",
    display: "block",
    margin: "0 auto",
    color: "#ef6f2e",
    fontFamily: "Akzidenz,Helvetica,Arial,sans-serif",
    letterSpacing: ".11em",
    textTransform: "uppercase",
    borderWidth: "1px",
    borderRadius: "30px",
    willChange: "border-color",
    textDecoration: "none",
    outline: "0",
    border: "2px solid #fff",

    "&:hover": {
      cursor: "pointer",
      transition: "border-color .3s ease",
      color: "black",
      borderColor: "hsla(0,0%,100%,.1)",
    },
  },
});

function BackButton() {
  const classes = useStyles();
  return (
    <>
      <Link to="/" className={classes.back}>
        Back
      </Link>
    </>
  );
}

export default BackButton;
