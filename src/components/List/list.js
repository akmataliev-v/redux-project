import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/TodoList";

function Index() {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(title));
  };
  return (
    <div>
      <h2>Todo list</h2>
      <input type="text" value={title} onChange={(e) => handleInputChange(e)} />
      <button onClick={handleAddTodo}>Add Todo List</button>

      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
}

export default Index;
