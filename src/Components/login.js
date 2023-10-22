import React from "react";




const Login = () => {


  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <label className="username">Username</label>
        <input className="usernameInput" type="text" />
        <label className="password">Password</label>
        <input className="passwordInput" type="password" />
        <button className="submitButton">SUBMIT</button>
      </div>



    </div>
  )
}


export default Login