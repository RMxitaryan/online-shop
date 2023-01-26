import { createUseStyles } from 'react-jss';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Profile from './components/ProfileIcon/Profile';
import Favourite from './components/ProfileIcon/Favourite';
import About from './components/ProfileIcon/About';
import Navbar from './components/Navbar/Navbar';
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
	const [searchDialogOpen, setSearchDialogOpen] = useState(false);
	const [signUpDialogOpen, setSignUpDialogOpen] = useState(false);
	const [signInDialogOpen, setSignInDialogOpen] = useState(false);
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [openHome, setOpenHome] = useState(true);
	const handleSignUpClickOpen = () => {
		// setSignInDialogOpen(false);
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
		// setSignUpDialogOpen(false);
		setSignInDialogOpen(true);
	};
	const handleSignInClose = () => {
		setSignInDialogOpen(false);
	};

	const handelClickMenuBar = () => {
		setIsOpenMenu(!isOpenMenu);
	};

	const classes = useStyles();
	return (
		<div className={classes.app}>
			<Routes>
				<Route
					element={
						<Navbar
							handelClickMenuBar={handelClickMenuBar}
							setOpenHome={setOpenHome}
							handleSignInClickOpen={handleSignInClickOpen}
							handleSignUpClickOpen={handleSignUpClickOpen}
							handleSearchClickOpen={handleSearchClickOpen}
						/>
					}
				>
					<Route
						path="/"
						element={
							<Home
								setIsOpenMenu={setIsOpenMenu}
								isOpenMenu={isOpenMenu}
								openHome={openHome}
								signInDialogOpen={signInDialogOpen}
								handleSignInClose={handleSignInClose}
								handleSignInClickOpen={handleSignInClickOpen}
								signUpDialogOpen={signUpDialogOpen}
								handleSignUpClose={handleSignUpClose}
								handleSearchClickOpen={handleSearchClickOpen}
								handleSearchClose={handleSearchClose}
								handleSignUpClickOpen={handleSignUpClickOpen}
								searchDialogOpen={searchDialogOpen}
							/>
						}
					/>
					<Route path="/profile" element={<Profile />} />
					<Route path="/favourite" element={<Favourite />} />
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
