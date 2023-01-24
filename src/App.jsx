import { createUseStyles } from 'react-jss';
import CarouselBox from './components/CarouselBox';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './components/HomePage/Home';
const useStyles = createUseStyles({
	app: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		marginRight: 0,
	},
});

function App() {
	const classes = useStyles();
	return (
		<div className={classes.app}>
			<Home />
			<Routes>
				<Route path="/" element={<CarouselBox />} />
			</Routes>
		</div>
	);
}

export default App;
