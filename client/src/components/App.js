import React, { useState } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import Navbar from './Navbar'
import SavedPosts from './SavedPosts'


function App() {

  const [user, setUser] = useState(null)

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
