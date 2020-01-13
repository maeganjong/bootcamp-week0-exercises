import React from 'react'
import { FancyButton } from './styles'

const ExampleComponent = ({ alertText }) => (
  <FancyButton onClick={() => alert(alertText)}>Click Me!</FancyButton>
)

export default ExampleComponent


import nanoid from `nanoid`;
<button type="button" onClick = {() => setAllTodos([...allTodos, {todo, id: nanoid()}])}>Click</button>;
{allTodos.map(({todo, id}) => <p key= {id}>{todo}</p>)}


<button type="button" onClick={() => {
  setAllTodos(allTodos.filter(todo =>{
    if (id === todo.id){
      return false
    }
    return true
  }))
}}>Delete Todo</button>