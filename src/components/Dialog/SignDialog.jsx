import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	signActionBlok: {
		display: 'flex',
		justifyContent: 'center',
	},

	signBtn: {
		backgroundColor: 'rgb(50,40,30)',
		color: 'rgb(210,210,210)',
		'&:hover': {
			color: 'rgb(50,40,30)',
		},
	},
});
function SignDialog({
	open,
	handleClose,
	handleSignUpClickOpen,
	handleSignInClickOpen,
}) {
	const classes = useStyles();
	const goToSignIn = () => {
		handleSignInClickOpen();
		handleClose();
	};
	const goToSignUp = () => {
		handleSignUpClickOpen();
		handleClose();
	};
	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{'Warning:you can not add a faourite item before signing in'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						To add an favourite item you must sign in at first
					</DialogContentText>
				</DialogContent>
				<DialogActions className={classes.signActionBlok}>
					<Button onClick={goToSignIn} className={classes.signBtn}>
						Sign in
					</Button>
					<Button onClick={goToSignUp} className={classes.signBtn}>
						Sign up
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default SignDialog;
