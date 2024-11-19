import { useState } from 'react';

export default function Addcategory() {
  const [isAddCategoryVisible, setAddCategoryVisible] = useState(false);
  const [isEditCategoryVisible, setEditCategoryVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null); // State to hold the category to edit

  const showAddCategoryForm = () => {
    setAddCategoryVisible(true);
  };

  const hideAddCategoryForm = () => {
    setAddCategoryVisible(false);
  };

  const showEditCategoryForm = (category) => {
    setCurrentCategory(category);
    setEditCategoryVisible(true);
  };

  const hideEditCategoryForm = () => {
    setEditCategoryVisible(false);
    setCurrentCategory(null);
  };

  return (
    <>
      <div className="mb-4">
        <button
          id="addCategoryBtn"
          className="px-5 py-3 font-semibold text-white bg-green-600 rounded-lg shadow hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
          onClick={showAddCategoryForm}
        >
          Thêm danh mục
        </button>
      </div>

      {/* Backdrop Overlay */}
      {(isAddCategoryVisible || isEditCategoryVisible) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={hideAddCategoryForm} // Close add form on backdrop click
        />
      )}

      {/* Add Category Form */}
      {isAddCategoryVisible && (
        <div
          id="addCategoryForm"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 transition-transform transform scale-100">
            <h2 className="text-xl font-bold mb-4">Thêm danh mục mới</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Tên danh mục</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập tên danh mục"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Hình ảnh (URL)</label>
                <input
                  type="url"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập URL hình ảnh"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                >
                  Thêm
                </button>
                <button
                  type="button"
                  className="ml-2 px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
                  onClick={hideAddCategoryForm}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Category Form */}
      {isEditCategoryVisible && (
        <div
          id="editCategoryForm"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 transition-transform transform scale-100">
            <h2 className="text-xl font-bold mb-4">Sửa danh mục</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Tên danh mục</label>
                <input
                  type="text"
                  required
                  defaultValue={currentCategory?.name}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập tên danh mục"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Hình ảnh (URL)</label>
                <input
                  type="url"
                  required
                  defaultValue={currentCategory?.image}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập URL hình ảnh"
                />
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
                  onClick={hideEditCategoryForm}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Category Table */}
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID danh mục</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên danh mục</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hình ảnh</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Sample Category Row */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">1</td>
            <td className="px-6 py-4 whitespace-nowrap">Điện thoại thông minh</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <img
                src="https://via.placeholder.com/50"
                alt="Điện thoại"
                className="w-12 h-12 object-cover"
              />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                data-action="edit"
                className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                onClick={() => showEditCategoryForm({ id: '1', name: 'Điện thoại thông minh', image: 'https://via.placeholder.com/50' })}
              >
                Sửa
              </button>
              <button className="ml-2 px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out">
                Xóa
              </button>
            </td>
          </tr>
          {/* Add more rows here as needed */}
        </tbody>
      </table>
    </>
  );
}