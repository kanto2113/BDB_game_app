import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'

import NavBar from './components/NavBar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/pages/Home'

const App = () => {
  
  return (
    <Router>
      <NavBar></NavBar>
        <Switch>
          <div>
          <Route exact path = "/" component={Home} />
          <Route path = "/login" component={Login} />
          <Route path = "/register" component={Register} />
          </div>
        </Switch>
    </Router>
  )
}

export default App;