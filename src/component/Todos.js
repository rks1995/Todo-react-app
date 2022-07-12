import { useState } from 'react'
import { useTodo } from '../contextApi/UseProvideTodo'
import styles from '../styles/app.module.css'

const Todos = ({ todos }) => {
  const [inputText, setInputText] = useState('')
  const { addTodo, loading } = useTodo()

  const addTodoItem = () => {
    addTodo(inputText)
    setTimeout(() => {
      setInputText('')
    }, 1000)
  }

  return (
    <div className={styles.todosList}>
      <div className={[styles.flex, styles.justifyBetween].join(' ')}>
        <input
          type='text'
          placeholder='Add Todo'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTodoItem} className={styles.addIcon}>
          {loading ? 'Adding...' : 'Add'}
        </button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={[
                styles.todoItem,
                styles.flex,
                styles.justifyBetween,
              ].join(' ')}
            >
              {todo.title}
              <div className={styles.flex}>
                <i className='fa-solid fa-pen-to-square'></i>
                <i className='fa-solid fa-trash'></i>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todos
