import { useEffect, useState } from "react";

export const Home = () => {
  const [addTodo, setAddTodo] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const handleAddTodo = () => {
    setAddTodo(true);
  };

  const formValidate = () => {
    if (inputValue !== "") {
      handleAddTodo();
      setError(false);
    } else {
      setError(true);
      console.log("error");
    }
  };

  const handleChange = (event) => {
    setInputValue(event);
    formValidate();
  };

  return (
    <div>
      <div className="flex justify-center gap-6 bg-neutral-800 p-4 ">
        <div
          className={`p-4 rounded-full cursor-pointer ${
            addTodo ? "bg-red-500" : "bg-white"
          } `}
          onClick={formValidate}
        ></div>
        <input
          type="text"
          name="name"
          id="name"
          value={inputValue}
          className="p-1  text-black "
          onChange={(event) => handleChange(event.target.value)}
        />
        <div className=""> {error && <p> empty input </p>} </div>
      </div>
    </div>
  );
};
