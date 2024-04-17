import { Trash2 } from "lucide-react";
import { useState } from "react";

export const Home = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setInputValue(event);
    setError(false);
  };

  const handleAddTodoClick = () => {
    if (inputValue !== "") {
      const newTodo = { todo: inputValue, id: Date.now() };
      setTodos([...todos, newTodo]);
      setInputValue("");
    } else {
      setError(true);
    }
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodoClick();
  };

  const handleDeleteClick = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-neutral-800 p-4 ">
        <form onSubmit={handleSubmit} className="">
          <input
            type="text"
            name="name"
            id="name"
            value={inputValue}
            className="p-2  text-black rounded-l-lg "
            onChange={(event) => handleChange(event.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-500 p-2 rounded-r-lg hover:bg-indigo-400 "
          >
            Ajouter
          </button>
        </form>
        <div className="mt-4">
          {todos.length > 0 &&
            todos.map((todo, index) => (
              <div className="flex items-center gap-1" key={index}>
                <li> {todo.todo} </li>
                <Trash2
                  size={30}
                  className="cursor-pointer p-1 bg-indigo-500 hover:bg-indigo-400 rounded-lg "
                  onClick={() => handleDeleteClick(todo.id)}
                />
              </div>
            ))}
        </div>
        <div className=""> {error && <p> empty input </p>} </div>
      </div>
    </div>
  );
};
