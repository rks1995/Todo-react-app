import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { TodoContext } from '../provider/Provider'

const useTodo = () => {
  return useContext(TodoContext)
}

const useTodoProvider = () => {
  const [todos, setTodos] = useState(null)
  const [loading, setLoading] = useState(true)

  const url = 'https://jsonplaceholder.typicode.com/todos'

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(url)
        setTodos(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchTodos()
  }, [])

  const addTodo = () => {}

  const updateTodo = () => {}

  const deleteItem = () => {}

  return {
    todos,
    loading,
    addTodo,
    updateTodo,
    deleteItem,
  }
}

export { useTodo, useTodoProvider }
