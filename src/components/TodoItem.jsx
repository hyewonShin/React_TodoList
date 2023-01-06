import React from "react";

function TodoItem(props) {
  console.log("TodoItem >>> ", props.item);
  return <div className="todo-item">{props.item}</div>;
}

export default TodoItem;
