import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/counterSlice";
import TodoList from "../redux/TodoList";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: TodoList,
  },
});

export default store;
