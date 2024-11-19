import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { ToastContainer } from "react-toastify";

export default function Login() {
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  // Login function
  function login1() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Đăng nhập thành công!',
      background: '#1e3a8a', // Dark blue background
      color: '#ffffff',
      showConfirmButton: false,
      timer: 1500
    });
    
    navigate("/");  // Redirect to home page after login
  }

  // Registration function
  function register1() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Đăng ký thành công!',
      background: '#1e3a8a',
      color: '#ffffff',
      showConfirmButton: false,
      timer: 1500
    });
    navigate("/login");  // Redirect to login page after registration
  }

  // Toggle between login and register forms
  function toggleForm() {
    setShowRegister(!showRegister);
  }

  return (
    <>
      <ToastContainer />
      <div className="py-10">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage: 'url("https://img.pikbest.com/origin/05/94/30/18qpIkbEsTyur.jpg!w700wp")'
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <p className="text-xl text-gray-600 text-center">
              {showRegister ? "Đăng ký tài khoản" : "Đăng nhập!"}
            </p>

            {/* Login Form */}
            {!showRegister ? (
              <div>
                <a
                  href="#"
                  className="flex items-center justify-center mt-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500"
                >
                  <div className="px-4 py-3">
                    {/* Google SVG Icon */}
                  </div>
                  <h1 className="px-4 py-3 w-5/6 text-center font-bold">
                    Đăng nhập với Google
                  </h1>
                </a>
                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/5 lg:w-1/4" />
                  <a href="#" className="text-xs text-gray-500 uppercase">
                    hoặc đăng nhập bằng email
                  </a>
                  <span className="border-b w-1/5 lg:w-1/4" />
                </div>

                {/* Email Input */}
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Địa chỉ Email
                  </label>
                  <input
                    className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="email"
                  />
                </div>

                {/* Password Input */}
                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Mật khẩu
                    </label>
                    <a href="#" className="text-xs text-gray-500">
                      Quên mật khẩu?
                    </a>
                  </div>
                  <input
                    className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="password"
                  />
                </div>

                {/* Login Button */}
                <div className="mt-8">
                  <button
                    onClick={login1}
                    className="bg-blue-600 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-500"
                  >
                    Đăng nhập
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/5 md:w-1/4" />
                  <a
                    href="#"
                    onClick={toggleForm}
                    className="text-xs text-gray-500 uppercase cursor-pointer"
                  >
                    hoặc đăng ký
                  </a>
                  <span className="border-b w-1/5 md:w-1/4" />
                </div>
              </div>
            ) : (
              // Registration Form
              <div className="ty">
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Địa chỉ Email
                  </label>
                  <input
                    className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="email"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Tên đầy đủ
                  </label>
                  <input
                    className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="text"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Mật khẩu
                  </label>
                  <input
                    className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="password"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nhập lại mật khẩu
                  </label>
                  <input
                    className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="password"
                  />
                </div>

                {/* Register Button */}
                <div className="mt-8">
                  <button
                    onClick={register1}
                    className="bg-blue-600 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-500"
                  >
                    Đăng ký
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/5 md:w-1/4" />
                  <a
                    href="#"
                    onClick={toggleForm}
                    className="text-xs text-gray-500 uppercase cursor-pointer"
                  >
                    Đã có tài khoản? Đăng nhập
                  </a>
                  <span className="border-b w-1/5 md:w-1/4" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}