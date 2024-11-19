import TodoItem from "./item";
import TodoContext from "../contexts/todocontext";
import { useContext } from "react";

export default function TodoList() {
  const { todos, dispatch } = useContext(TodoContext); // Lấy todos và dispatch từ context
  console.log(todos);
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-900 dark:text-white">
              Title
            </th>
            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-900 dark:text-white">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => (
            <TodoItem key={item.id} item={item} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
