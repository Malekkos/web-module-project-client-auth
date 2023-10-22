import React, { useState } from "react";
import axios from "axios";

const initialData = {
  username: "",
  password: ""
}

const Login = () => {
  const [data, setData] = useState(initialData)
  console.log(data)
  const onChange = (event) => {
    setData({...data, [event.target.name] :event.target.value})
  }
  const onSubmit = (event) => {
    event.preventDefault()
    axios.post("http://localhost:9000/api/login", data)
    .then(res => {
      console.log(res.data)
      localStorage.setItem("token", res.data.token)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <form onSubmit={event => onSubmit(event)}>
      <div className="loginWrapper">
        <div>
          <h1 className="titleLogin">Login</h1>
        </div>
        <div className="credentialsWrapper">
          <label className="username">Username</label>
          <input className="usernameInput" onChange={event => onChange(event)} name="username" value={data.username} type="text" />
          <label className="password">Password</label>
          <input className="passwordInput" onChange={event => onChange(event)} name="password" value={data.password} type="password" />
          <div>
           <button className="submitButton">Login</button>
          </div>
          </div>
      </div>
    </form>
  )
}


export default Login