import React from "react";
import "./Auth.css";
import logo from "../logo.svg";

const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <img src={logo} alt="Logo" />
        <h2>Create Account</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
