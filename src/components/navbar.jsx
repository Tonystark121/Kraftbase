import React from "react";
import styles from "../styles/navbar.module.css";
import { auth } from "../redux/authSlice";

const navbar = () => {
  const handleSignout = async() => {
     try {
        await auth.signOut()
        console.log('successfully logged out')
     } catch (error) {
       console.log(error)
     }
  }
  return (
    <div className={styles.nav}>
      <h2>Kraftbase Assignment</h2>
      <button onClick={handleSignout}>SigOut</button>
    </div>
  );
};

export default navbar;
