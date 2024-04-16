import axios from "axios";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todoValues, setTodoValues] = useState({
    content: "",
    author: "",
  });
  const URL = import.meta.env.VITE_BASE_URL;
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const data = await axios.get(`${URL}/todos`);
    setTodos(data.data.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1 className="mt-5 text-3xl text-center text-cyan-700 ">APP TODOS</h1>
      <AddTodo
        getTodos={getTodos}
        todoValues={todoValues}
        setTodoValues={setTodoValues}
      />
      <div className="flex flex-col gap-3 w-3/4 mx-auto">
        {todos.map((todo) => (
          <TodoList
            todoValues={todoValues}
            setTodoValues={setTodoValues}
            getTodos={getTodos}
            key={todo._id}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
