import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../styles/authPage.module.css";

const authPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Welcome to Kraftbase -
        <span> Manage All Tasks at a single Place</span>
      </div>
      <Outlet />
    </div>
  );
};

export default authPage;
