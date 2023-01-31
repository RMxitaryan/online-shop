import { createUseStyles } from 'react-jss';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Profile from './components/ProfileIcon/Profile';
import Favourite from './components/ProfileIcon/Favourite';
import About from './components/ProfileIcon/About';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import { height } from '@mui/system';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { addUsersFirebase } from './config/Config';
import Account from './components/SettingsLeftBar/SettBarRoutes/Account';
const useStyles = createUseStyles({
	app: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '100%',
		marginRight: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loading: {
		color: '#ef6f2e',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '300px',
	},
});

function App() {
	const [searchDialogOpen, setSearchDialogOpen] = useState(false);
	const [signUpDialogOpen, setSignUpDialogOpen] = useState(false);
	const [signInDialogOpen, setSignInDialogOpen] = useState(false);
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [openHome, setOpenHome] = useState(true);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 6000);
	}, []);

	// const db = getFirestore();
	// const colRef = collection(db, "SignedUpUsers");
	// getDocs(colRef)
	//   .then((snapshot) => {
	//     let users = [];
	//     snapshot.docs.forEach((doc) => {
	//       users.push({ ...doc.data(), id: doc.id });
	//     });
	//     console.log(users);
	//     console.log("kkk");
	//   })
	//   .catch((err) => console.log(err));
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
			{loading ? (
				<RingLoader
					color={'#ef6f2e'}
					loading={loading}
					size={150}
					className={classes.loading}
				/>
			) : (
				<Routes>
					<Route
						path="/"
						element={
							<Navbar
								handelClickMenuBar={handelClickMenuBar}
								setOpenHome={setOpenHome}
								openHome={openHome}
								handleSignInClickOpen={handleSignInClickOpen}
								handleSignUpClickOpen={handleSignUpClickOpen}
								handleSearchClickOpen={handleSearchClickOpen}
							/>
						}
					>
						<Route
							index
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
						<Route path="signin/profile" element={<Account />} />
						<Route path="favourite" element={<Favourite />} />
						<Route path="about" element={<About />} />
						<Route path="signin" element={<SignIn />} />
						<Route path="signup" element={<SignUp />} />
						{/* <Route
							path="profile/account"
							element={<Account name="Tigran" surname="Gevorgyan" />}
						/> */}
					</Route>
				</Routes>
			)}
		</div>
	);
}

export default App;
