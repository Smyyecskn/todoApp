import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const URL = import.meta.env.VITE_BASE_URL;
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const data = await axios.get(`${URL}/todos`);
    setTodos(data.data.data);
  };

  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);

  return (
    <div>
      <h1 className="mt-5 text-3xl text-center text-cyan-700 ">APP TODOS</h1>
    </div>
  );
}

export default App;
