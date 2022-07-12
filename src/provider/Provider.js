import { createContext } from 'react'
import { useTodoProvider } from '../contextApi/UseProvideTodo'

let initialState = {
  todos: [],
  loading: true,
  addTodo: () => {},
  updateTodo: () => {},
  deleteItem: () => {},
}

const TodoContext = createContext(initialState)

const TodoProvider = ({ children }) => {
  const todos = useTodoProvider() // this function is a custom hook which will get all the todos from api

  return <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>
}

export { TodoContext, TodoProvider }
