import React, { useState } from 'react';
import PrimaryButton from '../Button/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { createUseStyles } from 'react-jss';
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = createUseStyles({
	signUpDialog: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		borderRadius: '25px',
	},
	signUpContent: {
		width: '400px',
		height: '400px',
		backgroundColor: '#3a3333',
		opacity: 0.8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	signUpDialogActions: {
		backgroundColor: '#3a3333',
		width: '100%',
		opacity: 0.8,
		display: 'flex',
		justifyContent: 'space-around',
	},
	PrimaryButton: {
		color: 'white',
		'&:hover': {
			marginTop: 0,
			boxSizing: 'border-box',
			borderBottom: '1px solid orange',
		},
	},
	signUpInputs: {
		flex: 0.7,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
	},
	signUpInput: {
		borderRadius: '25px',
		border: 'none',
		width: '200px',
		height: '40px',
		padding: '10px',
	},
});

function SignInDialog({ open, handleClose }) {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const classes = useStyles();
	return (
		<Dialog
			className={classes.Dialog}
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby="alert-dialog-slide-description"
		>
			<div className={classes.signUpDialog}>
				<DialogContent className={classes.signUpContent}>
					<h4 style={{ color: 'white' }}>Sign Up</h4>
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
							type="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							placeholder="Password"
							className={classes.signUpInput}
						/>
					</div>
				</DialogContent>
				<DialogActions className={classes.signUpDialogActions}>
					<div>
						<PrimaryButton className={classes.PrimaryButton} variant="text">
							Sign In
						</PrimaryButton>
						<PrimaryButton className={classes.PrimaryButton} variant="text">
							Sign Up
						</PrimaryButton>
					</div>
				</DialogActions>
			</div>
		</Dialog>
	);
}
export default SignInDialog;
