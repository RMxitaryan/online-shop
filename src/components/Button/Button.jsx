import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '@mui/material';

const useStyles = createUseStyles({
	PrimaryButton: {
		color: 'white',
		'&:hover': {
			marginTop: '1px',
			borderBottom: '1px solid orange',
		},
	},
});

function PrimaryButton({ children, ...rest }) {
	const classes = useStyles();
	return (
		<Button className={classes.PrimaryButton} {...rest}>
			{children}
		</Button>
	);
}

export default PrimaryButton;
