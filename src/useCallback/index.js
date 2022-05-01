import React , { useState,useCallback } from "react";

import Todos from "./todos";

export default function Callback() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
//    we can use the useCallback hook to prevent the function from being recreated unless necessary.

//     Use the useCallback Hook to prevent the Todos component from re-rendering needlessly:
const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);
    return (
      <>
       <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
  };
