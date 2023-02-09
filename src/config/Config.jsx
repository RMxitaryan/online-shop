import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt1AdV22OrgmirQNOn54vFVbkywPvziNg",
  authDomain: "online-shop-e417e.firebaseapp.com",
  databaseURL:
    "https://online-shop-e417e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "online-shop-e417e",
  storageBucket: "online-shop-e417e.appspot.com",
  messagingSenderId: "692023712078",
  appId: "1:692023712078:web:01985f1d1b25b9fe45261f",
  measurementId: "G-MJK1KCZKR1",
};

firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const storage = getStorage(app);

export const user = getAuth();

// const colRef = collection(db, "SignedUpUsers");
// getDocs(colRef)
//   .then((snapshot) => {
//     let users = [];
//     snapshot.docs.forEach((doc) => {
//       users.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(users);
//   })
//   .catch((err) => console.log(err.message));

export const addUsersFirebase = (
  // userName,
  email,
  // password,
  photoUrl,
  firstName,
  lastName,
  phone,
  id
) => {
  setDoc(doc(db, "SignedUpUsers", uuid()), {
    // userName: userName,
    email: email,
    // password: password,
    // photoUrl: photoUrl,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
  });
};
