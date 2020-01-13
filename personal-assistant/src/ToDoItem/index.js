import React from 'react'
import {
  Display, Container, Button, ButtonContainer,
} from './styles'

const ToDoItem = ({
  id, todo, todos, setTodos,
}) => (
  <Container>
    <ButtonContainer>
      <Button
        onClick={() => {
          // Delete Todo with id
          setTodos(todos.filter(t => {
            if (id === t.id) {
              return false
            }
            return true
          }))
        }}
      />
    </ButtonContainer>
    <Display>{todo.title}</Display>
  </Container>
)
export default ToDoItem
