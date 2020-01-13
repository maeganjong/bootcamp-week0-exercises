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

const App = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  console.log(input)
  return (

    <ThemeProvider theme={theme}>
      <NavBar />
      <div>
        <Form setTodos={setTodos} todos={todos} />
        <SearchRow input={input} setInput={setInput} />
        {todos.length > 0
          ? todos.filter(({ title }) => title.toLowerCase().includes(input.toLowerCase()))
            .map(todo => (
              <ToDoItem
                todos={todos}
                setTodos={setTodos}
                id={todo.id}
                todo={todo}
                {...todo}
              />
            ))
          : <Display>No Todos for Today!</Display>}

      </div>
    </ThemeProvider>

  )
}

export default App
