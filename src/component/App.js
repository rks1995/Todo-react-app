import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Spinner from './Spinner'
import Todos from './Todos'
import styles from '../styles/app.module.css'

function App() {
  const [todos, setTodos] = useState(null)
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

  return (
    <>
      <div
        className={[
          styles.todosContainer,
          styles.flex,
          styles.justifyCenter,
        ].join(' ')}
      >
        {todos ? <Todos todos={todos} /> : <Spinner />}
      </div>
    </>
  )
}

export default App
