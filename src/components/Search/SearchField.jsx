import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	navbar: {
		backgroundColor: '#1a1111',
		borderTop: '1px solid #8a8888',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		height: '100%',
		opacity: 0.9,
		paddingTop: 20,
		boxSizing: 'border-box',
	},
	searchInput: {
		borderRadius: '25px',
		border: 'none',
		height: '35px',
		maxWidth: '300px',
	},
});

function SearchField() {
	const [inputValue, setInputValue] = useState('');
	const classes = useStyles();
	return (
		<div className={classes.navbar}>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
				className={classes.searchInput}
			/>
		</div>
	);
}

export default SearchField;
