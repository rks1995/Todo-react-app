import Navbar from './Navbar'
import Spinner from './Spinner'
import Todos from './Todos'
import styles from '../styles/app.module.css'
import { useTodo } from '../contextApi/UseProvideTodo'

function App() {
  const { todos } = useTodo()
  return (
    <>
      <Navbar />
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
