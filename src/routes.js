import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
  
const Routes = () => (
      <Router>
          <Switch>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/signin' component={SignIn}/>
          </Switch>
      </Router>
)

export default Routes