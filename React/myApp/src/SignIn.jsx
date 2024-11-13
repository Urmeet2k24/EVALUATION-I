import React from 'react';

function SignIn() {
  return (
    <form className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>
      <a href="http://127.0.0.1:5500/EVALUATION-I/Yash/homepage.html">
        <input type="button" value="Login" className="btn solid" />
      </a>
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-google"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </form>
  );
}

export default SignIn;