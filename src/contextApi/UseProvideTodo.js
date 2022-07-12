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

  const addTodo = (item) => {
    if (item === '') {
      toast.error('Empty Item, Add Something..')
      return
    }
    setLoading(true)
    // create new todo
    let todo = {
      user_id: 1,
      id: todos.length + 1,
      title: item,
      completed: false,
    }

    setTimeout(() => {
      toast.success('added item successfully!')
      setTodos([todo, ...todos])
      setLoading(false)
    }, 1000)
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
