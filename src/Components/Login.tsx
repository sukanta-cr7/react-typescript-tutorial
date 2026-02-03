import React, { useEffect, useState } from "react";
import { hashPassword } from "../Utils/crypto";
import { enforceSingleTab } from "../Utils/singleTab";
import "../assets/css/site_login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState("");
  const [salt, setSalt] = useState("");

  useEffect(() => {
    enforceSingleTab();

    // Fetch salt from backend
    fetch("/api/auth/salt")
      .then(res => res.json())
      .then(data => setSalt(data.salt));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username) {
      setError("Please enter User Id");
      return;
    }

    if (!password) {
      setError("Please enter Password");
      return;
    }

    const hashedPassword = hashPassword(password, salt);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password: hashedPassword,
        captcha
      })
    });

    const result = await response.json();

    if (!result.success) {
      setError(result.message);
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="card">
      <form className="login-box" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <input
          className="textbox"
          placeholder="User Id"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="textbox"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <img
          src="src/assets/Image_files/Portal_Refresh1.jpg"
          alt="captcha"
          className="captcha-img"
        />

        <input
          className="textbox"
          placeholder="Enter Captcha"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
        />

        {error && <div className="error">{error}</div>}

        <button className="btn_login" type="submit">
          LOG IN
        </button>

        <a href="/forgot-password" className="forgot-link">
          Forgot Password?
        </a>
      </form>
    </div>
  );
};

export default Login;
