import React, {useState, useContext} from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext) as {
    setUser: React.Dispatch<React.SetStateAction<{ username: string; password: string } | null>>;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password || !captcha) {
      setError("Please fill in all fields.");
      return;
    }
    setUser({ username, password });
  };
  return (
    <div>

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
