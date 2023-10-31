import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
function TodoForm() {
  const { todo } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-inline-flex">
      <input
        className="form-control"
        style={{ width: "fit-content" }}
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
      <button
        onClick={() => dispatch(updateTodo(todo))}
        className="btn btn-warning ms-4"
      >
        Update
      </button>
      <button
        className="btn btn-success ms-1"
        onClick={() => dispatch(addTodo(todo))}
      >
        Add
      </button>
    </li>
  );
}
export default TodoForm;
