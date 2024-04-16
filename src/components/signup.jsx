import React, { useEffect, useState } from "react";
import styles from "../styles/signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmail, signInUserWithGoogle } from "../redux/authSlice";

const signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.authentication);
  const navigate = useNavigate();
  console.log(data)
  const handleGoggleSignIn = () => {
    try {
      dispatch(signInUserWithGoogle());
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowError(false);
    }, 600);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setError("Invalid Password");
      setShowError(true);
      return;
    }
    if (password.length === 0 || password.length < 6) {
      setError("password is too short!");
      setShowError(true);
      return;
    }
    try {
      dispatch(createUserWithEmail({ email, password, userName }));
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (data && data?.user?.profile?.id !== undefined) navigate("/");
  }, [data]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          Welcome to Kraftbase -<span> Manage All Tasks at a single Place</span>
        </div>
        <div className={styles.formContainer}>
          <p className={styles.title}>Create Account</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder=""
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.sign}>
              Sign up
            </button>
          </form>
          {data?.error ? (
            <p className={styles.error}> {data?.error} </p>
          ) : (
            <>{showError && error && <p>{error}</p>}</>
          )}
          <div className={styles.socialMessage}>
            <div className={styles.line} />
            <p className={styles.message}>OR</p>
            <div className={styles.line} />
          </div>
          <div className={styles.socialIcons}>
            <button
              aria-label="Log in with Google"
              className={styles.icon}
              onClick={handleGoggleSignIn}
            >
              <img
                src="./assets/google.svg"
                alt="google"
                width={36}
                height={36}
              />
              <p>Signup in with google</p>
            </button>
          </div>
          <p className={styles.signup}>
            Already have an account?
            <Link className="link" to={"/signin"}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default signup;
