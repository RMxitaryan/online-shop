import React, { useState } from "react";
import PrimaryButton from "../Button/Button";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selector";
import { setUser } from "../../redux/user/actions";
import { addUsersFirebase, auth, db } from "../../config/Config";
import { Navigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { addBasket, addUsersFirebase } from "../../config/Config";


const useStyles = createUseStyles({
  signUpDialog: {
    marginTop: "3%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "15px",
    borderStyle: "solid",
    borderColor: "rgb(46 40 38 / 80%)",
  },
  signUpContent: {
    width: "400px",
    height: "400px",
    backgroundColor: "rgb(46 40 38 / 80%)",
    opacity: 0.8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  signUpDialogActions: {
    backgroundColor: "rgb(46 40 38 / 80%)",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    opacity: 0.8,
  },
  PrimaryButton: {
    color: "white",
    width: "100px",
    fontSize: "18px",
    "&:hover": {
      marginTop: 0,
      backgroundColor: "rgb(200,200,200)",
      color: "black",
    },
  },
  signUpInputs: {
    flex: 0.7,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  signUpInput: {
    borderRadius: "25px",
    border: "none",
    width: "200px",
    height: "40px",
    padding: "10px",
  },
  error: {
    color: "#FF0000",
  },
});
function SignUp() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();

  const onSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth, "signUp");
        setEmail("");
        setUserName("");
        setPassword("");
        alert(auth.user?.uid);
        setDoc(doc(db, "SignedUpUsers", auth.user.uid), {
          userName,
          email,
          password,
          fistName: "",
          lastName: "",
          phone: "",
          url: "",
        });
        // addUsersFirebase(userName, email, password);
        dispatch(setUser({ ...currentUser, email: auth.user.email }));
        addBasket(email);
        return navigate("/");
      })
      .catch((error) => setError("Invalid email or password"));
    firebase.auth().signInWithEmailAndPassword(email, password);
  };
  if (auth.currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <div className={classes.signUpDialog}>
      <div className={classes.signUpContent}>
        <h4 style={{ color: "white" }}>Sign Up</h4>
        <div className={classes.signUpInputs}>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Username"
            className={classes.signUpInput}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            className={classes.signUpInput}
          />

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            className={classes.signUpInput}
          />
        </div>
        <div className={classes.error}>{error}</div>
      </div>

      <div className={classes.signUpDialogActions}>
        <div>
          <PrimaryButton
            onClick={onSignUp}
            className={classes.PrimaryButton}
            variant="text"
          >
            Sign Up
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
