import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from '../src/Components/Navbar';
import LogInForm from './Components/FE_Unit2_React/LogInForm'
import Signup from './Components/FE_Unit2_React/Signup'
import PrivateRoute from '../src/Utils/PrivateRoute';
import SaltiestContext from '../src/Contexts/saltiestContext'
// import Dashboard from './Components/Dashboard';

function App() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : false;
  }, []);

  return (
    < >

      <Navbar />
      <Switch>
        {/* <Route path='/dashboard'>
         <Dashboard />
       </Route> */}

        <Route path='/SignIn'>
          <LogInForm userInfo={userInfo} setUserInfo={setUserInfo} />
        </Route>

        <Route path='/'>
          <Signup userInfo={userInfo} setUserInfo={setUserInfo} />
        </Route>

      </Switch>
    </>
  );
}

export default App;