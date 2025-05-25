import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/;

    if (!passwordPattern.test(password)) {
      alert("Password must contain at least one uppercase letter, one lowercase letter, and one number.");
      return;
    }

    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form className="login-inputs" onSubmit={handleSubmit}>
          <h2>Wandernest</h2>
          <h3>REGISTER NOW!</h3>
          <p>We are happy to have you with us.</p>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              className="input-field"
              type="text"
              placeholder="Enter Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              className="input-field"
              type="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              className="input-field"
              type="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="register-button">Register</button>

          <h4 className="register-text">
            Back to <Link to="/login"><span>Login</span></Link>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default Register;
