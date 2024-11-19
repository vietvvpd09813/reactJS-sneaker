// import { useReducer, useState } from "react";

// export default function Todo() {
//   // Khởi tạo danh sách todos ban đầu
//   const initTodos = [
//     { title: "Hoc JS", id: 1 },
//     { title: "Hoc CSS", id: 2 },
//     { title: "Hoc HTML", id: 3 },
//     { title: "Hoc React", id: 4 },
//   ];

//   // Sử dụng useReducer để quản lý trạng thái todos, với reducer xử lý các hành động như thêm, sửa, xóa todo
//   const [todos, dispatch] = useReducer(reducer, initTodos);
//   // State để lưu trữ nội dung todo mới (tên todo)
//   const [text, setText] = useState("");

//   // Hàm reducer xử lý các hành động (Add - Thêm, Edit - Sửa, Delete - Xóa)
//   function reducer(state, action) {
//     switch (action.type) {
//       case "Add":
//         const newTodo = { id: Date.now(), title: action.payload };
//         return [...state, newTodo];

//       case "Edit":
//         return state.map(todo =>
//           todo.id === action.payload.id
//             ? { ...todo, title: action.payload.title }
//             : todo
//         );

//       case "Delete":
//         return state.filter(todo => todo.id !== action.payload);

//       default:
//         return state;
//     }
//   }

//   // Hàm xử lý khi người dùng nhấn nút thêm todo mới
//   function handleAdd(e) {
//     e.preventDefault();
//     if (text.trim()) {
//       dispatch({ type: "Add", payload: text });
//       setText(""); 
//     }
//   }

//   // Hàm xử lý khi người dùng muốn sửa một todo
//   function handleEdit(id) {
//     const newTitle = prompt("Edit todo title: ");
//     if (newTitle) {
//       dispatch({ type: "Edit", payload: { id, title: newTitle } });
//     }
//   }

//   // Duyệt qua danh sách todos để hiển thị các todo trong bảng
//   const data = todos.map((item) => (
//     <tr key={item.id} className="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//       <td className="px-6 py-4">{item.title}</td>
//       <td className="px-6 py-4 flex space-x-2">
//         <button
//           onClick={() => dispatch({ type: "Delete", payload: item.id })}
//           className="text-white bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2 text-xs font-semibold focus:outline-none"
//         >
//           Delete
//         </button>
//         <button
//           onClick={() => handleEdit(item.id)}
//           className="text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2 text-xs font-semibold focus:outline-none"
//         >
//           Edit
//         </button>
//       </td>
//     </tr>
//   ));

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-900">
//       <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">Todo Management</h1>

//       <form onSubmit={handleAdd} className="mb-6">
//         <div className="flex flex-col space-y-4">
//           <input
//             onChange={(e) => setText(e.target.value)}
//             value={text}
//             type="text"
//             className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Enter your todo"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-2 text-center focus:outline-none"
//           >
//             Add Todo
//           </button>
//         </div>
//       </form>

//       <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Todo List</h2>
//       <div className="relative overflow-x-auto shadow-md rounded-lg">
//         <table className="w-full text-sm text-gray-500 dark:text-gray-400">
//           <thead className="bg-gray-100 dark:bg-gray-700">
//             <tr>
//               <th scope="col" className="px-6 py-3 text-left font-medium text-gray-900 dark:text-white">
//                 Title
//               </th>
//               <th scope="col" className="px-6 py-3 text-left font-medium text-gray-900 dark:text-white">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>{data}</tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



import { TodoProvider } from "./context/TodoContext"; // Import TodoProvider
import Todo from "./todos/todo";

function App() {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
}

export default App;