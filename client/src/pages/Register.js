import React, { useState } from "react";
import "../styles/Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <div className="register-wrapper">
      <h1>Create Your Account</h1>
      <p className="register-subtitle">Join Little Verses to Share Your Thoughts & Stories</p>

      <form className="register-form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />

        <button type="submit">Register</button>

        <p className="register-hint">
          Already have an account??? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
