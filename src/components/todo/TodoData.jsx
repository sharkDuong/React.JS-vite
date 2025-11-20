const TodoData = (props) => {
  const { todoList } = props;

  // console.log("Props received in TodoData:", todoList);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log("Rendering item:", item, index);
        return (
          <div className="todo-item">
            <div>{item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
