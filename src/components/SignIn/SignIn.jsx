<<<<<<< HEAD
import React, { useState } from 'react';
import PrimaryButton from '../Button/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { createUseStyles } from 'react-jss';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = createUseStyles({
	signInDialog: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		borderRadius: '25px',
	},
	signInContent: {
		width: '400px',
		height: '400px',
		backgroundColor: '#3a3333',
		opacity: 0.8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	signInDialogActions: {
		backgroundColor: '#3a3333',
		width: '100%',
		opacity: 0.8,
		display: 'flex',
		justifyContent: 'space-around',
	},
	PrimaryButton: {
		color: 'white',
		width: '100px',
		fontSize: '18px',
		'&:hover': {
			marginTop: 0,
			backgroundColor: 'rgb(200,200,200)',
			color: 'black',
		},
	},
	signInInputs: {
		flex: 0.7,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
	},
	signInInput: {
		borderRadius: '25px',
		border: 'none',
		width: '200px',
		height: '40px',
		padding: '10px',
	},
});

function SignInDialog({ open, handleClose }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const classes = useStyles();

	const onSignIn = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(
				() => {
					setEmail('');
					setPassword('');
					handleClose();
				},
				() => {
					alert('Invalid email or passwor');
				}
			);
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
					<h1 style={{ color: 'white' }}>Sign In</h1>
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
						>
							Sign In
						</PrimaryButton>
					</div>
				</DialogActions>
			</div>
		</Dialog>
	);
=======
import React, { useState } from "react";
import PrimaryButton from "../Button/Button";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { createUseStyles } from "react-jss";
import { borderColor } from "@mui/system";
import { useNavigate } from "react-router";
import { set } from "@firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selector";
import { setUser } from "../../redux/user/actions";


const useStyles = createUseStyles({
  signInDialog: {
    marginTop: "3%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "15px",
    borderStyle: "solid",
    borderColor: "rgb(46 40 38 / 80%)",
  },
  signInContent: {
    width: "400px",
    height: "400px",
    backgroundColor: "rgb(46 40 38 / 80%)",
    opacity: 0.8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  signInDialogActions: {
    backgroundColor: "rgb(46 40 38 / 80%)",
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
  error: {
    color: "#ff0000",
  },
});

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();
  // const currentUser = useSelector(selectUser);
  // const dispatch = useDispatch();

  const onSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        (auth) => {
          setEmail("");
          setPassword("");
          // dispatch(setUser({ email: auth.user.email }));
          return navigate("/");
        },
        (e) => {
          setError("Invalid email or password");
        }
      );
  };
  console.log(currentUser);
  return (
    <div className={classes.signInDialog}>
      <div className={classes.signInContent}>
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
        <div className={classes.error}>{error}</div>
      </div>

      <div className={classes.signInDialogActions}>
        <div>
          <PrimaryButton
            onClick={onSignIn}
            className={classes.PrimaryButton}
            variant="text"
          >
            Sign In
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
>>>>>>> 60e7a4a651f99320c64a159eabad493e1baf109e
}

export default SignIn;
