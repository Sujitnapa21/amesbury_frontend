import React from "react";
import "./Auth.css";
import logo from "../logo.svg";

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <img src={logo} alt="Logo" />
        <h2>Reset Password</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="New Password" required />
          <input
            type="confirm-password"
            placeholder="Confirm Password"
            required
          />
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
