import React, { useState } from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/config"
import Loader from '../../components/loader/Loader'
import { toast } from "react-toastify";
  import 'react-toastify/dist/ReactToastify.css';
  import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();


  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setIsLoading(false)
        toast.success("login successful")
        navigate("/")
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setIsLoading(false)
      });
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle =()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // const user = result.user;
    toast.success("Login Successfull")
    navigate("/")

  }).catch((error) => {
  
    const errorMessage = error.message;
    toast.error(errorMessage)
 
  });

  }
  return (
    <>
    {isLoading && <Loader/>}
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="login" width="400px" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Login</h2>
          <form onSubmit={loginUser}>
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="--btn  --btn-danger --btn-block">
              Login
            </button>
            <div className={styles.links}>
              <Link to="/reset">Reset Password</Link>
            </div>
            <p>-- or --</p>
          </form>
          <button className="--btn  --btn-primary --btn-block"
          onClick={signInWithGoogle}>
            <FaGoogle color="#fff" />
            &nbsp; Login with Google
          </button>
          <span className={styles.register}>
            <p>Don't have an account?</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </section>
    </>
  );
};

export default Login;
