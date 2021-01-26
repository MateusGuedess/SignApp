import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import SignUp from './components/SignUp'
  
const Routes = () => (
      <Router>
          <Switch>
            <Route exact path='/signup' component={SignUp}/>
          </Switch>
      </Router>
)

export default Routes