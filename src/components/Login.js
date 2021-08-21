import React from "react";

function LoginForm() {
  return (
    <div className="loginScreen">
      <form className="loginForm">
        <h2>Welcome Back!</h2>

        <div className="emailDiv">
          <p>EMAIL</p>
          <input type="text" className="loginUsername"></input>
        </div>
        <div className="passwordDiv">
          <p>PASSWORD</p>
          <input type="password" className="loginUserPassword"></input>
          <button type="submit">Log In</button>
          <div className="switchToRegister">
            <p>
              Don't have an account? <a>Register</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
