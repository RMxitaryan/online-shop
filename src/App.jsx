import { createUseStyles } from 'react-jss';
import CarouselBox from './components/CarouselBox';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Profile from './components/ProfileIcon/Profile';
import Favourite from './components/ProfileIcon/Favourite';
import About from './components/ProfileIcon/About';
import Test from './Test';
import { useState } from 'react';
const useStyles = createUseStyles({
	app: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '100%',
		marginRight: 0,
	},
});

function App() {
	const classes = useStyles();
	return (
		<div className={classes.app}>
			<Home />
			<Routes>
				<Route path="/profile" element={<Profile />} />
				<Route path="/favourite" element={<Favourite />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
