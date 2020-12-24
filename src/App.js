import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from './components/nav'
import Home from './pages/home'
import Page1 from './pages/page1'
import Page2 from './pages/page2'

function App() {
  return (
    <Router>
      <Nav/>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Page1' component={Page1}/>
      <Route path='/Page2' component={Page2}/>
    </Switch>
    </Router>

  );
}

export default App;
