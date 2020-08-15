import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const log = (event) => {
    event.preventDefault(); //This stops the refresh
    //login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Logged in , back to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
            className="login_logo"
          />
        </Link>
      </div>
      <div className="login_container">
        <h1>Sing In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={log} type="submit" className="sign_in">
            Sign In
          </button>
        </form>

        <p>
          By Singning-in you agree to Amazon's Conditions of use and sale ,
          Please see our Privacy Notice , our Cookies Notice and our
          Interest-based Ads Notice
        </p>
        <button onClick={register} className="create">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
