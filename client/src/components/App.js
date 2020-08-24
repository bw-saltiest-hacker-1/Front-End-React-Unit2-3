import React, { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import Navbar from './Navbar'
import SavedPosts from './SavedPosts'
import axios from 'axios'


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    axios.get('https://jsonblob.com/api/jsonBlob/9af77dc1-e634-11ea-b735-83f87d192444')
      .then(res => {
        console.log(res.data.payload)
        localStorage.setItem('token', res.data.payload)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <Navbar user={user} />
      <Switch>
        <Route exact path='/'>
          {/* homepage page */}
        </Route>
        <Route path='/login'>
          {/* login page */}
        </Route>
        <Route path='/register'>
          {/* register page */}
        </Route>
        <PrivateRoute component={Dashboard} path='/dashboard' />
        <PrivateRoute component={SavedPosts} path='/savedposts' />
      </Switch>
    </div>
  )
}

export default App;
