import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Menu from '../template/menu'
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <BrowserRouter>
    <Menu />
    
    <Switch>
      <Route exact path="/todos" component={Todo} />
      <Route exact path="/about" component={About} />
      <Redirect from="*" to="/todos" />
    </Switch>
  </BrowserRouter>
)