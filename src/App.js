import React from 'react';
import './App.css';
import {Link, Routes , Route} from 'react-router-dom';
import Login from './Components/login';
function App() {
  const loggedIn = localStorage.getItem("token")
  return (
    <div className="App">
      <nav className="Navbar">
        <div className="alignLeft">
          <Link to="/login" className="friendDatabase">Friends Database</Link>
        </div>
        <div className="wrapper">
          <Link to="/login" className="login">Login</Link>
          <Link to="/friendList" className="friendList">Friend List</Link>
          <Link to="/addFriend" className="addFriend">Add Friend</Link>
          <Link to="/logout" className="logout">Logout</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/friendList"/>
        <Route path="/addFriend"/>
      </Routes>
    </div>
  );
}

export default App;
