import { useState } from 'react';

export default function Adproduct() {
  const [isAddProductVisible, setAddProductVisible] = useState(false);
  const [isEditProductVisible, setEditProductVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null); // State to hold the product to edit

  const showAddProductForm = () => {
    setAddProductVisible(true);
  };

  const hideAddProductForm = () => {
    setAddProductVisible(false);
  };

  const showEditProductForm = (product) => {
    setCurrentProduct(product);
    setEditProductVisible(true);
  };

  const hideEditProductForm = () => {
    setEditProductVisible(false);
    setCurrentProduct(null);
  };

  return (
    <>
      <div className="mb-4">
        <button
          id="addProductBtn"
          className="px-5 py-3 font-semibold text-white bg-green-600 rounded-lg shadow hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
          onClick={showAddProductForm}
        >
          Thêm sản phẩm
        </button>
      </div>

      {/* Backdrop Overlay */}
      {(isAddProductVisible || isEditProductVisible) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      )}

      {/* Add Product Form */}
      {isAddProductVisible && (
        <div
          id="addProductForm"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 transition-transform transform scale-100">
            <h2 className="text-xl font-bold mb-4">Thêm sản phẩm mới</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập tên sản phẩm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">ID sản phẩm</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập ID sản phẩm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Giá</label>
                <input
                  type="number"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập giá sản phẩm"
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
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Số lượng</label>
                <input
                  type="number"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập số lượng"
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
                  onClick={hideAddProductForm}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Product Form */}
      {isEditProductVisible && (
        <div
          id="editProductForm"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 transition-transform transform scale-100">
            <h2 className="text-xl font-bold mb-4">Sửa sản phẩm</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                <input
                  type="text"
                  required
                  defaultValue={currentProduct?.name}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập tên sản phẩm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">ID sản phẩm</label>
                <input
                  type="text"
                  required
                  defaultValue={currentProduct?.id}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập ID sản phẩm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Giá</label>
                <input
                  type="number"
                  required
                  defaultValue={currentProduct?.price}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập giá sản phẩm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Hình ảnh (URL)</label>
                <input
                  type="url"
                  required
                  defaultValue={currentProduct?.image}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập URL hình ảnh"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Số lượng</label>
                <input
                  type="number"
                  required
                  defaultValue={currentProduct?.quantity}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập số lượng"
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
                  onClick={hideEditProductForm}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Product Table */}
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID sản phẩm</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hình ảnh</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Sample Product Row */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">1</td>
            <td className="px-6 py-4 whitespace-nowrap">Điện thoại thông minh</td>
            <td className="px-6 py-4 whitespace-nowrap">10,000,000 VND</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <img
                src="https://via.placeholder.com/50"
                alt="Điện thoại"
                className="w-12 h-12 object-cover"
              />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">50</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                data-action="edit"
                className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                onClick={() => showEditProductForm({ id: '1', name: 'Điện thoại thông minh', price: 10000000, image: 'https://via.placeholder.com/50', quantity: 50 })}
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