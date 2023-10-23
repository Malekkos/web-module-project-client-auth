import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Logout = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token")
    token ? console.log("there is a token"): navigate("/login")
  }, [])
  const onClick = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <input type="button" value="Yes" onClick={() => onClick()} />
    </div>
  )
}

export default Logout