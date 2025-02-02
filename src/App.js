import React, {useState, useEffect} from 'react';
import './App.css';
import {Link, Routes , Route} from 'react-router-dom';
import Login from './Components/login';
import FriendList from './Components/friends';
import AddFriend from './Components/addFriend';
import Logout from './Components/logout';
function App() {

  return (
    <div className="App">
      <nav className="Navbar">
        <div className="alignLeft">
          <Link to="/login" className="friendDatabase">Friends Database</Link>
        </div>
        <div className="wrapper">
          <Link to="/logout" className="logout">Logout</Link>
          <Link to="/friends" className="friendList">Friend List</Link>
          <Link to="/addFriend" className="addFriend">Add Friend</Link>
          <Link to="/login" className="login">Login</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={<FriendList />}/>
        <Route path="/addFriend" element={<AddFriend />}/>
        <Route path="/logout" element={<Logout />}/>
      </Routes>
    </div>
  );
}

export default App;
