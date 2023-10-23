import React from "react";



const Friend = (props) => {
  // console.log(props.friends)
  return (
    <div className="friendsWrapper">
      {props.friends.map(friend => {
        // {console.log(friend)}
        return (
        <div className="friendDetailsWrapper">
          <h3 className="friend" id={friend.id}>{friend.name} - {friend.email}</h3>
          <h4 className="friendAge">{friend.name} is {friend.age} years old</h4>
        </div>
      )
      })}
    </div>
  )
}



export default Friend