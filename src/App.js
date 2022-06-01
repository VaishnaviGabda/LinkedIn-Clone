
import './App.css';
import React, { useEffect } from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser  , login} from './features/userSlice';
import { auth } from './firebase';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";


function App() {
const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //the user is logged in
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
    });
  }, []);




    return (
   <Router>
      {!user ? (
       <Login/>
      ) : (
        <div className="app">
           <Header/><Home/>
        </div>
      )}
    </Router>
  );
}





export default App;
