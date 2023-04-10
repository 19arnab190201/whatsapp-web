import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const userDataToDB = async (name, email, uid) => {
    try {
      await setDoc(doc(db, "userinfo", uid), {
        name: name,
        email: email,
        uid: uid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (name, profilepic) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: profilepic,
    })
      .then(() => {
        console.log("Profile updated");
        console.log(
          "AA: ",
          auth.currentUser.displayName,
          auth.currentUser.email,
          auth.currentUser.uid
        );
        userDataToDB(
          auth.currentUser.displayName,
          auth.currentUser.email,
          auth.currentUser.uid
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, updateUser }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
