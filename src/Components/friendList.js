import React, {useState} from "react";
import Friend from "./friend";
import { getAll } from "../mocks/data";


const FriendList = () => {
  const [friends, setFriends] = useState(getAll)
  console.log(friends)
  return (
    <div>
      <h1 className="friendListTitle">Friend List</h1>
      <Friend friends={friends} />
    </div>
  )
}


export default FriendList