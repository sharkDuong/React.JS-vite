const TodoNew = (props) => {
  console.log("Props received in TodoNew:", props);
  const {addNewTodo} = props;
  // addNewTodo("duong");

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