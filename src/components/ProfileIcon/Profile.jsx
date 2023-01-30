import React from 'react';
import Home from '../HomePage/Home';
import AccSettBar from '../SettingsLeftBar/AccSettBar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	Profile: {
		display: 'flex',
		flexDirection: 'row',
		height: '90.8vh',
	},
});

function Profile() {
	const classes = useStyles();

	return (
		<div className={classes.Profile}>
			<AccSettBar name={'Tigran'} surname={'Gevorgyan'} />
		</div>
	);
}

export default Profile;
