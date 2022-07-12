import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { TodoContext } from '../provider/Provider'
import toast from 'react-hot-toast'

const useTodo = () => {
  return useContext(TodoContext)
}

const useTodoProvider = () => {
  const [todos, setTodos] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        // get todos
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        )
        setTodos(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchTodos()
  }, [])

  const addTodo = async (item) => {
    if (item === '') {
      toast.error('Empty Item, Add Something..')
      return
    }
    setLoading(true)
    // create new todo
    let todo = {
      id: todos.length + 2,
      user_id: 1,
      title: item,
      completed: false,
    }
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          todo,
        }
      )
      toast.success('added item successfully!')
      setTodos([response.data.todo, ...todos])
      setLoading(false)
    } catch (error) {
      console.log('error')
    }
  }
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
