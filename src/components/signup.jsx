import React from "react";
import styles from "../styles/signup.module.css";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div className={styles.formContainer}>
      <p className={styles.title}>Create Account</p>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter email"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter password"
          />
        </div>
        <button className={styles.sign}>Sign in</button>
      </form>
      <div className={styles.socialMessage}>
        <div className={styles.line} />
        <p className={styles.message}>OR</p>
        <div className={styles.line} />
      </div>
      <div className={styles.socialIcons}>
        <button aria-label="Log in with Google" className={styles.icon}>
          <img src="./assets/google.svg" alt="google" width={36} height={36} />
          <p>Signup in with google</p>
        </button>
      </div>
      <p className={styles.signup}>
        Already have an account?
        <Link to={'/signin'}>
          <a rel="noopener noreferrer" href="#" className="">
            Sign in
          </a>
        </Link>
      </p>
    </div>
  );
};

export default signup;
