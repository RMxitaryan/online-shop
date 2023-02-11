import React, { useEffect } from "react";
import Home from "../../HomePage/Home";
import AccSettBar from "../AccSettBar";
import { makeStyles } from "@mui/styles";
import { auth, db } from "../../../config/Config";
import { collection, getDocs } from "firebase/firestore";
import { setUser } from "../../../redux/user/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  Profile: {
    display: "flex",
    flexDirection: "row",
    // height: "90.8vh",
  },
  leftBar: {
    // justifyContent: "start",
    // justifyItems: "start",
    width: "30vh",
  },
  rightBar: {
    // flex: 9,
  },
});

function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    const colRef = collection(db, "SignedUpUsers");
    getDocs(colRef)
      .then((snapshot) => {
        let obj = {};
        snapshot.docs.forEach((doc) => {
          if (doc.id === auth.currentUser.uid) {
            obj = { ...doc.data() };
          }
        });
        dispatch(setUser({ ...obj }));
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className={classes.Profile}>
      <div className={classes.leftBar}>
        <AccSettBar name={"Tigran"} surname={"Gevorgyan"} />
      </div>
      <div className={classes.rightBar}></div>
    </div>
  );
}

export default Profile;
