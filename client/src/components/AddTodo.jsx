/* eslint-disable react/prop-types */
import axios from "axios";

const AddTodo = ({ getTodos, todoValues, setTodoValues }) => {
  // console.log(addTodo);

  const URL = import.meta.env.VITE_BASE_URL;
  const addTodos = async (body) => {
    await axios.post(`${URL}/todos`, body);
    getTodos();
  };
  const editTodo = async (body) => {
    await axios.put(`${URL}/todos/${body._id}`, body);
    getTodos();
  };

  const handleSubmit = () => {
    addTodos({ content: todoValues.content, author: todoValues.author });
    if (todoValues?._id) {
      editTodo(todoValues);
    } else {
      addTodos(todoValues);
    }

    setTodoValues({
      content: "",
      author: "",
    });
  };

  const handleChange = (e) => {
    setTodoValues({
      ...todoValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex w-[50%] gap-2 mx-auto my-2">
      <input
        className="w-[70%] block mt-4 mx-auto bg-purple-200 rounded-2xl p-2 "
        type="text"
        value={todoValues.content}
        placeholder="Add Todo"
        name="content"
        onChange={handleChange}
      />
      <input
        className="w-[70%] block mt-4 mx-auto bg-purple-200 rounded-2xl p-2 "
        type="text"
        placeholder="Add Author"
        value={todoValues.author}
        name="author"
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className="w-[30%] mx-auto font-bold bg-purple-400 rounded-2xl "
      >
        {todoValues?._id ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default AddTodo;
