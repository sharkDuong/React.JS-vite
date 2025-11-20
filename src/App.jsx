import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'

const App = () => {
  
  const ngocduong = 'NgocDuongDev'
  const age = 23;
  const data = {
    address: "Hanoi",
    country: "Vietnam"
  }
  
  return (
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData 
        name={ngocduong}
        age={age}
        data={data}
        />
        
        <div className='todo-image'>
          <img src={reactLogo} className="logo react"  />
        </div>
      </div>
  )
}

export default App
