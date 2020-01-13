/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  Link, Switch, Route, BrowserRouter,
} from 'react-router-dom'
import theme, { StyledLink } from './theme'
import { Display } from './FormInput/styles'
import ToDoItem from './ToDoItem'
import ToDoList from './ToDoList'
import Form from './Form'
import SearchRow from './SearchRow'
import App from './App'
import Greeting from './Greeting'

const MainApp = () => (
  <div>
    <Switch>
      <Route path="/app">
        <App />
      </Route>
      <Route path="/">
        <Greeting />
      </Route>
    </Switch>
  </div>
)
export default MainApp
