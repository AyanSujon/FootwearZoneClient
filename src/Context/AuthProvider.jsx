
// import React, { useState } from 'react';
// // import { AuthContext } from './AuthContext';
// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
// // import { auth } from '../firebase/firebase.config';
// import { useEffect } from 'react';
// import { auth } from '@/firebase/firebase.config';
// import { AuthContext } from './AuthContext';


// const googleProvider = new GoogleAuthProvider();



// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);





//     // Create new user 
//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)

//     }
//     // Update user Profile 
//     const updateUserProfile = (displayName, photoURL) => {
//         setLoading(true);
//         return updateProfile(auth.currentUser, {
//             displayName, photoURL,
//         })
//     };

//     // login user 
//     const loginUser = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     // Sign in user with Google
//     const signInWithGoogle = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider)
//     }



//     // Sign Out User 
//     const signOutUser = () => {
//         setLoading(true);
//         return signOut(auth);
//     }


//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false);
//         })
//         return () => {
//             unsubscribe()
//         }
//     }, [])




//     const authInfo = {
//         user,
//         setUser,
//         loading,
//         setLoading,
//         createUser,
//         updateUserProfile,
//         loginUser,
//         signInWithGoogle,
//         signOutUser,





//     };






//     return (
//         <AuthContext value={authInfo}>
//             {children}
//         </AuthContext>
//     );
// };

// export default AuthProvider;







"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  createUser,
  loginUser,
  signOutUser,
  signInWithGoogle,
  updateUserProfile,
  onUserStateChange
} from "../firebase/authFunctions"; // relative path

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onUserStateChange((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Signup with email/password
  const signup = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUser(email, password);
      setUser(userCredential.user);
      return userCredential.user;
    } finally {
      setLoading(false);
    }
  };

  // Login with email/password
  const login = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await loginUser(email, password);
      setUser(userCredential.user);
      return userCredential.user;
    } finally {
      setLoading(false);
    }
  };

  // Login with Google
  const googleLogin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithGoogle();
      setUser(userCredential.user);
      return userCredential.user;
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    setLoading(true);
    try {
      await signOutUser();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Update profile
  const updateProfileUser = async (displayName, photoURL) => {
    setLoading(true);
    try {
      await updateUserProfile(displayName, photoURL);
      setUser({ ...user, displayName, photoURL });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        googleLogin,
        logout,
        updateProfileUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = () => useContext(AuthContext);
