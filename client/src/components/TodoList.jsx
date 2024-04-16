/* eslint-disable react/prop-types */
import axios from "axios";

const TodoList = ({ todo, getTodos, todoValues, setTodoValues }) => {
  const URL = import.meta.env.VITE_BASE_URL;

  const handleEdit = async (todo) => {
    setTodoValues(todo);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${URL}/todos/${id}`);
    getTodos();
  };

  const handleClick = async (todo) => {
    todo.isCompleted = !todo.isCompleted;
    await axios.put(`${URL}/todos/${todo._id}`, todo);
    getTodos();
  };

  return (
    <div className="flex flex-wrap  justify-between bg-pink-200 rounded-xl px-5 py-3 font-semibold mt-3">
      <p
        className={
          todo.isCompleted ? "w-[35%] line-through text-red-600 " : "w-[35%]"
        }
      >
        {todo.content}
      </p>
      <p className="w-[35%]">{todo.author}</p>
      <div className="w-[30%] flex gap-2">
        <span className="cursor-pointer" onClick={() => handleClick(todo)}>
          👍
        </span>
        <button
          onClick={() => handleEdit(todo)}
          className=" px-3 py-1 bg-blue-300"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(todo._id)}
          className="px-3 py-1 bg-purple-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoList;
