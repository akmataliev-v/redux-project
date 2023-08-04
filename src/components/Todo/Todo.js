import React from "react";
import Item from "./Item";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";

function Todo() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <Item item={count} />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Todo;
