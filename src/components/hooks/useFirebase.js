import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import initializeAuthentication from "../../Firebase/firebase.initialize";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    })
  }, [])

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
  }

  return {
    user,
    error,
    signInUsingGoogle,
    logOut
  }
}

export default useFirebase;