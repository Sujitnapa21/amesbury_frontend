import React from "react";
import "./Auth.css";
import logo from "../logo.svg";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <img src={logo} alt="Logo"  />
        <h2>Welcome Back!</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p>
          <a href="/forgot-password">Forgot Password?</a>
        </p>
        {/* <div className="social-login">
          <button className="google-login">Login with Google</button>
          <button className="facebook-login">Login with Facebook</button>
        </div> */}
        <p>
          Don’t have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
