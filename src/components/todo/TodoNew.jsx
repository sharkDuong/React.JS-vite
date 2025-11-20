import React, { useState } from "react";
const TodoNew = (props) => {
  // const valueInput = "duong"
  const [valueInput, setValueInput] = useState("duong");

  const { addNewTodo } = props;
  // addNewTodo("duong");

  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  };
  const handleOnChange = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
        className="todo-input"
        placeholder="Nhập công việc mới..."
      />
      <button className="todo-button" onClick={handleClick}>
        Add
      </button>
      <div>my text input is ={valueInput}</div>
    </div>
  );
};
export default TodoNew;
