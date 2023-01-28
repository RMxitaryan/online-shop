import { createUseStyles } from 'react-jss';
import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import PrimaryButton from '../Button/Button';
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

function Navbar({
	handelClickMenuBar,
	setOpenHome,
	handleSignInClickOpen,
	handleSignUpClickOpen,
	handleSearchClickOpen,
}) {
	const classes = useStyles();
	return (
		<>
			<div className={classes.header}>
				<div className={classes.headerTopLeft}>
					<img
						src="/img/menu.png"
						width={23}
						height={23}
						onClick={handelClickMenuBar}
						style={{ cursor: 'pointer' }}
					/>
				</div>
				<div className={classes.name}>
					<Link to="/">
						<img
							src="/img/bork.jpg"
							onClick={() => {
								setOpenHome(true);
							}}
							width={100}
							height={25}
						/>
					</Link>
				</div>
				<div className={classes.headerTopRight}>
					<ProfileIcon setOpenHome={setOpenHome} />
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
			<div>
				<Outlet />
			</div>
		</>
	);
}

export default Navbar;
