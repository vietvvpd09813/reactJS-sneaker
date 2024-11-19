import { useReducer } from "react";
import List from "../components/todos/list";
import FormAdd from "./todos/formAdd";
import TodoContext from "./contexts/todocontext";

function Todos() {
  const initTodos = [
    { title: "Hoc JS", id: 1 },
    { title: "Hoc CSS", id: 2 },
    { title: "Hoc HTML", id: 3 },
    { title: "Hoc React", id: 4 },
  ];
  let [todos, dispatch] = useReducer(reducer, initTodos);
  function reducer(state, action) {
    let indexTodo;

    switch (action.type) {
      case "Add":
        console.log("Add");
        return [...state, { id: 1212, title: action.payload }];
      case "Edit":
        console.log("Edit");
        return [];
      case "Delete":
        indexTodo = action.payload;
        return state.filter((todo, index) => {
          return index !== indexTodo;
        });
      default:
        break;
    }
  }

  function handleAdd(text) {
    dispatch({ type: "Add", payload: text });
  }

  return (
    <TodoContext.Provider value={{ todos, dispatch, handleAdd }}>
      <div className="todos">
        <h1>Todo Management</h1>
        <FormAdd />
        <List />
      </div>
    </TodoContext.Provider>
  );
}
export default Todos;