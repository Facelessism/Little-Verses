import React, { useState } from "react";

import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-wrapper">
      <h1>Welcome Back</h1>
      <p className="login-subtitle">Write & Manage Your Blogs</p>

      <form className="login-form">
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

        <button type="submit">Login</button>

        <p className="login-hint">
          Don't have An Account Here? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
