import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/signin.module.css";

const signin = () => {
  return (
    <div className={styles.formContainer}>
      <p className={styles.title}>Login</p>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Email</label>
          <input type="text" name="username" id="username" placeholder="" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="" />
        </div>
        <button className={styles.sign}>Sign in</button>
      </form>
      <div className={styles.forgot}>
        <a rel="noopener noreferrer" href="#">
          Forgot Password?
        </a>
      </div>
      <div className={styles.socialMessage}>
        <div className={styles.line} />
        <p className={styles.message}>OR</p>
        <div className={styles.line} />
      </div>
      <div className={styles.socialIcons}>
        <button aria-label="Log in with Google" className={styles.icon}>
          <img src="./assets/google.svg" alt="google" width={36} height={36} />
          <p>Log in with google</p>
        </button>
      </div>
      <p className={styles.signup}>
        Don't have an account?
        <Link to={"/signup"}>
          <a rel="noopener noreferrer" href="#" className="">
            Sign up
          </a>
        </Link>
      </p>
    </div>
  );
};

export default signin;
