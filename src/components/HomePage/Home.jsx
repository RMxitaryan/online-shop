import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import FullScreenDialog from '../Search/SearchDialog';
import PrimaryButton from '../Button/Button';
import SignUpDialog from '../SignUp/SignUpDialog';
import SignInDialog from '../SignIn/SignIn';
import ProfileIcon from '../ProfileIcon/ProfileIcon';

const useStyles = createUseStyles({
	header: {
		backgroundColor: '#3a3330',
		width: '100%',
		height: 60,
		header: {},
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	name: {
		color: 'white',
		fontSize: 27,
	},
	headerTopRight: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: 250,
		marginRight: 12,
	},

	searchIcon: {
		'&:hover': {
			cursor: 'pointer',
		},
	},
	headerTopLeft: { marginLeft: 15 },
});

function Home() {
	const classes = useStyles();

	const [searchDialogOpen, setSearchDialogOpen] = useState(false);
	const [signUpDialogOpen, setSignUpDialogOpen] = useState(false);
	const [signInDialogOpen, setSignInDialogOpen] = useState(false);

	const handleSignUpClickOpen = () => {
		setSignUpDialogOpen(true);
	};
	const handleSignUpClose = () => {
		setSignUpDialogOpen(false);
	};
	const handleSearchClickOpen = () => {
		setSearchDialogOpen(true);
	};

	const handleSearchClose = () => {
		setSearchDialogOpen(false);
	};
	const handleSignInClickOpen = () => {
		setSignInDialogOpen(true);
	};
	const handleSignInClose = () => {
		setSignInDialogOpen(false);
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
					<PrimaryButton
						onClick={handleSignInClickOpen}
						disabled={false}
						variant="text"
					>
						sign in
					</PrimaryButton>
					<PrimaryButton
						onClick={handleSignUpClickOpen}
						disabled={false}
						variant="text"
					>
						sign up
					</PrimaryButton>
					<img src="/img/bag.png" width={23} height={23} />
					<img
						src="/img/search.png"
						width={23}
						height={23}
						className={classes.searchIcon}
						onClick={handleSearchClickOpen}
					/>
				</div>
			</div>
			<FullScreenDialog
				handleClickOpen={handleSearchClickOpen}
				handleClose={handleSearchClose}
				open={searchDialogOpen}
			/>
			<SignUpDialog
				handleClickOpen={handleSignUpClickOpen}
				handleClose={handleSignUpClose}
				open={signUpDialogOpen}
			/>
			<SignInDialog
				handleClickOpen={handleSignInClickOpen}
				handleClose={handleSignInClose}
				open={signInDialogOpen}
			/>
		</div>
	);
}

export default Home;
