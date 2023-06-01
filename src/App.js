import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import UserListe from './Components/UserListe';
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Private from './Routes/PrivateRoute';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/users" element={<UserListe/>}/>
        <Route path="/user/:id" element={<Profile/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path='/admin' element={<Private isAuth={isAuth} />}>
          <Route path="/admin" element={<Admin/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;