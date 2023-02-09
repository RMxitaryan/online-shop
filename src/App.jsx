import { createUseStyles } from "react-jss";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import { height } from "@mui/system";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { addUsersFirebase, db } from "./config/Config";
import EditProfile from "./components/SettingsLeftBar/SettBarRoutes/EditProfile";
import Profile from "./components/SettingsLeftBar/SettBarRoutes/Profile";
import Kitchen from "./components/MenuPages/Kitchen";
import HomeAndClimat from "./components/MenuPages/HomeAndClimat";
import HealthAndBeauty from "./components/MenuPages/HealthAndBeauty";
import BorkHome from "./components/MenuPages/BorkHome";
import Accessories from "./components/MenuPages/Accessories";
import { useDispatch } from "react-redux";
import { setCard } from "./redux/user/actions";
import MenuBar from "./components/Menu/MenuBar";
const useStyles = createUseStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginRight: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    color: "#ef6f2e",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "300px",
  },
});

function App() {
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const [signUpDialogOpen, setSignUpDialogOpen] = useState(false);
  const [signInDialogOpen, setSignInDialogOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [openHome, setOpenHome] = useState(true);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const colRef = collection(db, "Images");
    getDocs(colRef)
      .then((snapshot) => {
        let arr = [];
        snapshot.docs.forEach((doc) => {
          console.log(doc, "doc");
          arr.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setCard(arr));
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleSignUpClickOpen = () => {
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
          color={"#ef6f2e"}
          loading={loading}
          size={150}
          className={classes.loading}
        />
      ) : (
        <>
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
                  setIsOpenMenu={setIsOpenMenu}
                  isOpenMenu={isOpenMenu}
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
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="profile" element={<Profile />} />
              <Route path="editprofile" element={<EditProfile />} />
              <Route path="Kitchen" element={<Kitchen />} />
              <Route path="HomeAndClimat" element={<HomeAndClimat />} />
              <Route path="HealthAndBeauty" element={<HealthAndBeauty />} />
              <Route path="BorkHome" element={<BorkHome />} />
              <Route path="Accessories" element={<Accessories />} />
            </Route>
          </Routes>
          {isOpenMenu ? (
            <MenuBar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
          ) : null}
        </>
      )}
    </div>
  );
}

export default App;
