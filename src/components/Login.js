import React from "react";
import "./Auth.css";
import logo from "../logo.svg";
// import profiles from "../profiles.jpg";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();
  function GoToHome() {
    navigate("/welcome-page")
  }

  return (
    <div className="auth-container">
      {/* <div className="auth-form">
        <img src={profiles} alt="Logo"  />

      </div> */}
      <div className="auth-form">
        <img src={logo} alt="Logo" className="img-logo"/>
        <h2>Welcome Back!</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="auth-button" onClick={GoToHome}>
            Login
          </button>
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
