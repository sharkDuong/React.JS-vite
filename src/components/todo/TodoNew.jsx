const TodoNew = (props) => {
  console.log("Props received in TodoNew:", props);
  const {addNewTodo} = props;
  // addNewTodo("duong");

  const handleClick = () => {
    alert("click me")
  }
  const handleOnChange = (name) => {
    console.log("handleOnChange",name);
  }

  return (
    <div className="todo-form">
          <input 
            type="text"  onChange={(event) => handleOnChange(event.target.value)}
            className="todo-input"
            placeholder="Nhập công việc mới..."
          />
          <button className="todo-button"onClick={handleClick}>Add</button>
        </div>
  )
}
export default TodoNew