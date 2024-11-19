import { useState } from 'react';

export default function Useradmin() {
  const [isEditRoleVisible, setEditRoleVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // State to hold the user to edit

  // Predefined roles
  const roles = ['Quản trị', 'Biên tập', 'Người dùng'];

  const showEditRoleForm = (user) => {
    setCurrentUser(user);
    setEditRoleVisible(true);
  };

  const hideEditRoleForm = () => {
    setEditRoleVisible(false);
    setCurrentUser(null);
  };

  return (
    <>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Quản lý người dùng</h2>
      </div>

      {/* Backdrop Overlay */}
      {isEditRoleVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={hideEditRoleForm} // Close form on backdrop click
        />
      )}

      {/* Edit User Role Form */}
      {isEditRoleVisible && (
        <div
          id="editRoleForm"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 transition-transform transform scale-100">
            <h2 className="text-xl font-bold mb-4">Sửa vai trò người dùng</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Tên người dùng</label>
                <input
                  type="text"
                  required
                  defaultValue={currentUser?.name}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Vai trò</label>
                <select
                  required
                  defaultValue={currentUser?.role}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                >
                  Cập nhật
                </button>
                <button
                  type="button"
                  className="ml-2 px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
                  onClick={hideEditRoleForm}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* User Table */}
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vai trò</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Sample User Row */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Nguyễn Văn A</td>
            <td className="px-6 py-4 whitespace-nowrap">a.nguyen@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap">Hoạt động</td>
            <td className="px-6 py-4 whitespace-nowrap">Quản trị</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                onClick={() => showEditRoleForm({ name: 'Nguyễn Văn A', role: 'Quản trị' })}
              >
                Sửa
              </button>
            </td>
          </tr>
          {/* Add more rows here as needed */}
        </tbody>
      </table>
    </>
  );
}