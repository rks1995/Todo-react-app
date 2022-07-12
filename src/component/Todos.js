import { useState } from 'react'
import { useTodo } from '../contextApi/UseProvideTodo'
import styles from '../styles/app.module.css'

const Todos = ({ todos }) => {
  const [inputText, setInputText] = useState('')
  const [todoObject, setTodoObject] = useState(null)
  const [isUpdate, setIsUpdate] = useState(false)
  const { addTodo, updateTodo, deleteItem, loading } = useTodo()

  const addTodoItem = () => {
    addTodo(inputText)
    setTimeout(() => {
      setInputText('')
    }, 1000)
  }

  const updateTodoItem = () => {
    // sending the todoObject and the required updated text
    updateTodo(todoObject, inputText)

    setTimeout(() => {
      setInputText('')
      setIsUpdate(false)
    }, 1000)
  }

  // this function will place the text into the input field for updating.
  const setForUpdate = (e, itemId) => {
    e.preventDefault()
    let todo = todos.filter((todo) => todo.id === itemId)
    setInputText(todo[0].title)
    setTodoObject(todo[0])
    setIsUpdate(true)
  }

  //delete todo item

  const handleDelete = (e, itemId) => {
    e.preventDefault()
    deleteItem(itemId)
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
        {isUpdate ? (
          <button onClick={updateTodoItem} className={styles.addIcon}>
            {loading ? 'Updating...' : 'Update'}
          </button>
        ) : (
          <button onClick={addTodoItem} className={styles.addIcon}>
            {loading ? 'Adding...' : 'Add'}
          </button>
        )}
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
                <a href='/' onClick={(e) => setForUpdate(e, todo.id)}>
                  <i className='fa-solid fa-pen-to-square' id={styles.edit}></i>
                </a>
                <a
                  href='/'
                  onClick={(e) => {
                    handleDelete(e, todo.id)
                  }}
                >
                  <i className='fa-solid fa-trash' id={styles.delete}></i>
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todos
