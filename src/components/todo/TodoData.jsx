const TodoData = (props) => {
  const { todoList, deleteTodo } = props;
  const handClick = (id) => {
    deleteTodo(id);
  };
  // console.log("Props received in TodoData:", todoList);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log("Rendering item:", item, index);
        return (
          <div className="todo-item">
            <div>{item.name}</div>
            <button
              onClick={() => handClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
