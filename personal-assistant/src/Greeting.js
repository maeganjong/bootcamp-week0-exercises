import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Link, Switch, BrowserRouter } from 'react-router-dom'
import theme, { StyledLink } from './theme'
import { Display } from './FormInput/styles'
import ToDoItem from './ToDoItem'
import ToDoList from './ToDoList'
import Form from './Form'
import SearchRow from './SearchRow'
import NavBar from './NavBar'

const Greeting = () => (

  <Switch>
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <h1>Hello!</h1>

      </div>
    </ThemeProvider>
  </Switch>

)

export default Greeting
