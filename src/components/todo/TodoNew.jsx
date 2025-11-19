const TodoNew = () => {
  return (
    <div className="todo-form">
          <input 
            type="text" 
            className="todo-input"
            placeholder="Nhập công việc mới..."
          />
          <button className="todo-button">Add</button>
        </div>
  )
}
export default TodoNew