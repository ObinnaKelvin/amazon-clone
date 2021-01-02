import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./datalayer/StateProvider";


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>>', authUser);

      // authUser ? console.log('User Logged in') : console.log('User Logged out')
      authUser ? 
      dispatch({
        type: 'SET_USER',
        user: authUser
      }): 
      dispatch({
        type: 'SET_USER',
        user: null
      })
    })
  }, [])
  return (
    //BEM
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>          
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
