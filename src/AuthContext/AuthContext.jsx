import { createContext } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";

import auth from '../firebase/firebase.config'
import { useEffect } from "react";
import { useState } from "react";

export const ContextProvider = createContext(null);

const AuthContext = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const singInEmail = (email,password) => {
         setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () =>{
         setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
     
    const logOut = () =>{
        return signOut(auth);
    }
    const userUpdateProfile = (disName) =>{
       return updateProfile(auth.currentUser, {
         displayName: disName,
         photoURL: "https://i.ibb.co/xLtfkCy/photo-1.jpg",
       });
    }


    useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,currentUser=>{
                setUser(currentUser)
                setLoading(false);
        })


        return () => {
            unSubscribe();
        }

    },[])

    const authInfo = {
      user,
      createUser,
      singInEmail,
      logOut,
      signInGoogle,
      userUpdateProfile,
      loading,
    };

   


    return (

        <ContextProvider.Provider value={authInfo}>
                {children}
        </ContextProvider.Provider>
    );
};

AuthContext.propTypes ={
    children: PropTypes.node
}
export default AuthContext;