import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/signin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { signInUserWithGoogle, signInUserWithEmail } from "../redux/authSlice";

const signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.authentication);

  console.log(data)

  const handleGoggleSignIn = () => {
    try {
      dispatch(signInUserWithGoogle());
    } catch (error) {
      setError(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setError("Invalid Password");
      setShowError(true);
      return;
    }
    if (password.length === 0) {
      setError("password is too short!");
      setShowError(true);
      return;
    }
    try {
      dispatch(signInUserWithEmail({ email, password }));
      const data = useSelector((state) => state.authentication);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setShowError(false);
    }, 600);
  }, [error]);

  useEffect(() => {
    if (data && data?.user?.profile?.id !== undefined) navigate("/");
  }, [data.user]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          Welcome to Kraftbase -<span> Manage All Tasks at a single Place</span>
        </div>
        <div className={styles.formContainer}>
          <p className={styles.title}>Login</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.sign}>
              Sign in
            </button>
          </form>
          {data?.error ? (
            <p className={styles.error}> {data?.error} </p>
          ) : (
            <>{showError && error && <p>{error}</p>}</>
          )}
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
              <p>Log in with google</p>
            </button>
          </div>
          <p className={styles.signup}>
            Don't have an account?
            <Link className="link" to={"/signup"}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default signin;
