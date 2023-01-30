import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import FullScreenDialog from '../Search/SearchDialog';
import SignUpDialog from '../SignUp/SignUpDialog';
import SignInDialog from '../SignIn/SignInDialog';
import MenuBar from '../Menu/MenuBar';
import CarouselBox from '../CarouselBox';
import Navbar from '../Navbar/Navbar';
import { Card } from '../Cards/Card';

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
		marginLeft: '200px',
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

	return (
		<>
			<div className={classes.app}>
				<FullScreenDialog
					handleClickOpen={handleSearchClickOpen}
					handleClose={handleSearchClose}
					open={searchDialogOpen}
				/>

				{openHome && <CarouselBox />}

				{isOpenMenu ? (
					<MenuBar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
				) : null}
				<Card />
			</div>
		</>
	);
}

export default Home;
