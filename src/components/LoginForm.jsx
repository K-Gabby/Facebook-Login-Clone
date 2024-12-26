import React, { useState } from 'react';
import "../styles/components/LoginForm.css"

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Implement your login logic here
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Log In</button>

        {/* Forgotten password link */}
        <div className="forgot-password">
          <button type="button" onClick={() => console.log("Forgot password   clicked")} className="link-button">Forgotten password?
          </button>
        </div>

      {/* Create New Account Button */}
      <div className="sign-up">
        <button>Create New Account</button>
      </div>
      </form>


      {/* Footer Text */}
      <div className="footer-text">
        <p>
          <b>Create a Page</b> for a celebrity, brand, or business.
        </p>
      </div>
      <footer style={{textAlign: "center", marginRight: "20px"}}>
      <p><strong>Disclaimer:</strong> This is a demonstration project created for educational purposes. It is not affiliated with or endorsed by Facebook.</p>
      </footer>
    </div>
  );
};

export default LoginForm;
