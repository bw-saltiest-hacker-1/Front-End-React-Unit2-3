import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { NavBar } from '../src/Components/NavBar';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import { PrivateRoute } from '../src/Utils/PrivateRoute';
import Dashboard from './Components/Dashboard'
import SavedPosts from './Components/SavedPosts';
// <<<<<< React 1 GET Req
// import GitHub from './Components/GitHub';
// <<<<<< END React 1 GET Req

function App() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : false;
  }, []);

  return (
    < >
      <NavBar />
      <Switch>

        <Route exact path='/'>
          <Dashboard />
          {/* // <<<<<< React 1 GET Req*/}
          {/* <GitHub /> */}
          {/* // <<<<<< END React 1 GET Req*/}
        </Route>

        <Route path='/SignIn'>
          <SignIn userInfo={userInfo} setUserInfo={setUserInfo} />
        </Route>

        <Route path='/SignUp'>
          <SignUp userInfo={userInfo} setUserInfo={setUserInfo} />
        </Route>

        <PrivateRoute component={SavedPosts} path='/savedposts' />

      </Switch>
    </>
  )
}

export default App;