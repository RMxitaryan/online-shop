import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FullScreenDialog from "../Search/SearchDialog";
import SignUpDialog from "../SignUp/SignUpDialog";
import SignInDialog from "../SignIn/SignInDialog";
import MenuBar from "../Menu/MenuBar";
import CarouselBox from "../CarouselBox";
import Navbar from "../Navbar/Navbar";
import { RingLoader } from "react-spinners";
import { Card } from "../Cards/Card";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { selectCard } from "../../redux/user/selector";
import { setCard, setUser } from "../../redux/user/actions";
import { v4 as uuidv4 } from "uuid";
import { auth, db } from "../../config/Config";

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
    marginLeft: "200px",
    color: "white",
    fontSize: 27,
  },
  headerTopRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 250,
    marginRight: 12,
  },

  searchIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  headerTopLeft: { marginLeft: 15 },
  loading: {
    color: "#ef6f2e",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "300px",
  },
});

function Home({
  setIsOpenMenu,
  isOpenMenu,
  openHome,
  signInDialogOpen,
  handleSignInClose,
  handleSignInClickOpen,
  signUpDialogOpen,
  handleSignUpClose,
  handleSearchClickOpen,
  handleSearchClose,
  handleSignUpClickOpen,
  searchDialogOpen,
}) {
  const classes = useStyles();
  const cards = useSelector(selectCard);

  return (
    <div className={classes.app}>
      <FullScreenDialog
        handleClickOpen={handleSearchClickOpen}
        handleClose={handleSearchClose}
        open={searchDialogOpen}
      />

      <CarouselBox />

      {isOpenMenu ? (
        <MenuBar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      ) : null}
      <SignInDialog open={signInDialogOpen} handleClose={handleSignInClose} />
      <SignUpDialog open={signUpDialogOpen} handleClose={handleSignUpClose} />
      {cards.map((item) => {
        return (
          <Card
            key={uuidv4()}
            openHome={openHome}
            handleSignUpClose={handleSignUpClose}
            handleSignUpClickOpen={handleSignUpClickOpen}
            handleSignInClickOpen={handleSignInClickOpen}
            handleSignInClose={handleSignInClose}
            src={item.src}
            price={item.price}
            name={item.name}
          />
        );
      })}
    </div>
  );
}

export default Home;
