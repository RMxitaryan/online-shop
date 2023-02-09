import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import BackButton from "../Button/BackButton";

const useStyles = createUseStyles({
  header: {
    position: "relative",
    height: "calc(75vh - 138px)",
    minHeight: "412px",
    maxHeight: "700px",
    overflow: "hidden",
  },
  image: {
    position: "static",
    top: "0",
    left: "0",
    zIndex: "100",
    display: "inline-block",
    width: "100%",
    // height: "100%",
    // // overflow: "hidden",
    // // verticalAlign: "top",
    // // backgroundRepeat: "no-repeat",
    // // backgroundPosition: "50%",
    // // backgroundSize: "cover",
    // // opacity: "1",
    // // transition: "opacity .5s ease-out",
    // // pointerEvents: "all",
    // // willChange: "opacity",
  },
  picture: {
    position: "relative",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    transition: "opacity .3s ease-out",
    objectFit: "cover",
    objectPosition: "center",
    verticalAlign: "top",
    imageRendering: "-webkit-optimize-contrast",
  },
  title: {
    position: "absolute",
    top: "60%",
    right: "0",
    left: "0",
    margin: "auto",
    textShadow: "0 0 10px #000",
    transform: "translateY(-50%)",
    letterSpacing: "3px",
  },
  name: {
    width: "100%",
    marginBottom: "4vh",
    color: "#fff",
    fontWeight: "400",
    fontSize: "34px",
    lineHeight: "1.25",
    whiteSpace: "normal",
    textAlign: "center",
    fontFamily: "bork,Helvetica,Arial,sans-serif",
  },
  text: {
    width: "40%",
    margin: "0 auto 40px",
    color: "#fff",
    fontSize: "16px",
    fontFamily: "Akzidenz-Ext,Helvetica,Arial,sans-serif",
    lineHeight: "1.563",
    textAlign: "center",
  },
});

function Kitchen() {
  const classes = useStyles();
  return (
    <>
      <section className={classes.header}>
        <div className={classes.image}>
          <picture>
            <img
              src="/img/kitchen(3).jpg"
              alt="kitchen"
              className={classes.picture}
            />
          </picture>
        </div>
        <div className={classes.title}>
          <div className={classes.name}>Kitchen</div>
          <div className={classes.text}>
            Masterpieces of the home collection for all of your culinary ideas
          </div>
          <BackButton />
        </div>
      </section>
    </>
  );
}

export default Kitchen;
