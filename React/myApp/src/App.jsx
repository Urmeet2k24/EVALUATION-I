import React, { useState } from 'react';
import SignIn from './SignInForm';
import SignUp from './SignUpForm';
import './App.css';

function App() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleSignUpMode = () => setIsSignUpMode(!isSignUpMode);

  return (
    //<div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
    <div>
      
      <div className="forms-container">
        <div className="signin-signup">
          <SignIn />
          <SignUp />
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Create your JobPro profile and apply to top jobs!</p>
            <button className="btn transparent" onClick={toggleSignUpMode}>
              Sign up
            </button>
          </div>
          <img src="image1.webp" className="image" alt="Sign up" />
        </div>
      </div>
    </div>
  );
}

export default App;
