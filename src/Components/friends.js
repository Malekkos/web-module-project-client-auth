import React, {useState, useEffect} from "react";
import Friend from "./friend";
import { getAll } from "../mocks/data";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const FriendList = () => {
  const [friends, setFriends] = useState("")
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  // console.log(token)
  useEffect(() => {
    token ? console.log("there is a token"): navigate("/login")
    axios.get("http://localhost:9000/api/friends", {headers: {authorization: token}})
    .then(res => {
      // console.log(res)
      setFriends(res.data)
    }
    )
    .catch(err => {
      console.log(err)
    })
  }, [])
  // console.log(friends)
  return (
    <div>
      <h1 className="friendListTitle">Friend List</h1>
      {friends === "" ?  "Getting friends!" :<Friend friends={friends} />}
    </div>
  )
}


export default FriendList