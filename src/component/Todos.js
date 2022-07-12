import styles from '../styles/app.module.css'

const Todos = ({ todos }) => {
  return (
    <div className={styles.todosList}>
      <div className={[styles.flex, styles.justifyBetween].join(' ')}>
        <input type='text' placeholder='Add Todo' />
        <button className={styles.addIcon}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <>
              <li
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
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default Todos
