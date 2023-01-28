import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Account from './SettBarRoutes/Account';
import Password from './SettBarRoutes/Password';
const useStyles = makeStyles({
	accSettBar: {
		backgroundColor: '#3a3333',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	homeIcon: {},
	barList: {
		margin: 0,
		padding: 0,
		flex: 3,
		listStyle: 'none',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		color: 'white',
	},
	barListItem: {
		borderBottom: '1px solid black',
		height: '7vh',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: 'white',
		textDecoration: 'none',
		'&:hover': {
			backgroundColor: 'rgb(230,230,230)',
			color: '#1a1111',
		},
		'& span': {
			paddingLeft: 15,
		},
	},
	header: {
		flex: 1,
		borderBottom: '1px solid black',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		color: 'white',
	},
	active: {
		backgroundColor: 'rgb(230,230,230)',
		color: '#1a1111',
		borderBottom: '1px solid black',
		height: '7vh',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		textDecoration: 'none',
	},

	accImage: {
		flex: 2,
		fontSize: '90px',
	},
});

function AccSettBar({ name, surname }) {
	const classes = useStyles();
	return (
		<>
			<div className={classes.accSettBar}>
				<div className={classes.header}>
					<AccountCircleOutlined className={classes.accImage} />
					<h3>{`${name} ${surname}`}</h3>
				</div>

				<ul className={classes.barList}>
					<Link to="account" className={classes.barListItem}>
						<HomeIcon className={classes.homeIcon} />
						<span>Account</span>
					</Link>
					<li className={classes.barListItem}>
						<KeyIcon className={classes.password} />
						<span> Password</span>
					</li>
					<li className={classes.barListItem}>
						<PersonIcon className={classes.security} />
						<span> Security</span>
					</li>
					<li className={classes.barListItem}>
						<NotificationsIcon className={classes.notification} />
						<span> Notifications</span>
					</li>
				</ul>
			</div>
		</>
	);
}

export default AccSettBar;
