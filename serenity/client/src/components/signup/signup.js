import React, { useState } from "react";

const SignUpform = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
      <div classname="cover">
        
        
        <div className="sign-form">
        <form>
            
            
            <input type="text" className="log" placeholder="username" />
            <input type="password" className="log" placeholder="password" />
            <input type="email" className=" log" placeholder="email address" />
            {isLoggedIn ? (
        <div>
            <script src="Home.js"></script>
            <button onClick={handleLogout}>Logout</button>
        </div>
        ) : (
        <div className="login-font">
            <h1>Please Login</h1>
            <button onClick={handleLogin}>Login</button>
            <div class="media-options">
            <a href="#" class="field facebook">
                <i class='bx bxl-facebook facebook-icon'></i>
                <span>Login with Facebook</span>
            </a>
        </div>
            <div class="media-options">
             <a href="#" class="field google">
                 <span>Login with Google</span>
            </a>
        </div>
          </div>
        )}
        </form>
        </div>
    </div>
  );
};
export default SignUpform;

