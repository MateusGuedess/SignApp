import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home'
  
const Routes = () => (
      <Router>
          <Switch>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/signin' component={SignIn}/>
            <Route exact path='/home' component={Home}/>
          </Switch>
      </Router>
)

export default Routes