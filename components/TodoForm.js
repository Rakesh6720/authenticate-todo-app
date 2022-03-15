import { useState, useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodosContext);

  return (
    <form>
      <div>
        <label htmlFor="todo">Todo</label>
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Learn about authentication"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
