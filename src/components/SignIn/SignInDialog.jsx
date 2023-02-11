import React, { useState } from "react";
import PrimaryButton from "../Button/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { createUseStyles } from "react-jss";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selector";
import { setUser } from "../../redux/user/actions";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = createUseStyles({
  signInDialog: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "25px",
  },
  signInContent: {
    width: "400px",
    height: "400px",
    backgroundColor: "#3a3333",
    opacity: 0.8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  signInDialogActions: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#3a3333",
    width: "100%",
    opacity: 0.8,
    display: "flex",
    justifyContent: "space-around",
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
  signInInputs: {
    flex: 0.7,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  signInInput: {
    borderRadius: "25px",
    border: "none",
    width: "200px",
    height: "40px",
    padding: "10px",
  },
  span: { color: "#302d2b" },
  link: {
    marginLeft: 10,
    listStyleType: "none",
    color: "#302d2b",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
      color: "#9a9999",
    },
  },
});

function SignInDialog({ open, handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        (auth) => {
          setEmail("");
          setPassword("");
          dispatch(setUser({ email: auth.user.email }));
          return navigate("/");
        },
        (e) => {
          setError("Invalid email or password");
        }
      );
    handleClose();
  };
  return (
    <Dialog
      className={classes.Dialog}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className={classes.signInDialog}>
        <DialogContent className={classes.signInContent}>
          <h1 style={{ color: "white" }}>Sign In</h1>
          <div className={classes.signInInputs}>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              className={classes.signInInput}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              className={classes.signInInput}
            />
          </div>
        </DialogContent>

        <DialogActions className={classes.signInDialogActions}>
          <div>
            <PrimaryButton
              onClick={onSignIn}
              className={classes.PrimaryButton}
              variant="text"
              sx={{ color: "#fff" }}
            >
              Sign In
            </PrimaryButton>
          </div>
        </DialogActions>
        <div>
          <span className={classes.span}>
            Don't have an account yet?
            <Link className={classes.link} to="/signup" onClick={handleClose}>
              Sign up here.
            </Link>
          </span>
        </div>
      </div>
    </Dialog>
  );
}
export default SignInDialog;
