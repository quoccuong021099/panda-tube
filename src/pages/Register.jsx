import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[700px] h-auto bg-gray-100 p-10">
        <h1 className="text-center font-semibold text-black text-4xl uppercase">
          Register
        </h1>
        <form className="flex justify-center p-10 flex-col">
          <div className="group-form mt-5">
            <label
              htmlFor="username"
              className="inline-block mb-2 font-semibold text-xl"
            >
              Tên đăng nhập:
            </label>
            <input
              id="username"
              type="text"
              className="outline-none w-full h-10 p-5"
              placeholder="Tên đăng nhập"
            />
          </div>
          <div className="group-form mt-5">
            <label
              htmlFor="password"
              className="inline-block mb-2 font-semibold text-xl"
            >
              Mật khẩu:
            </label>
            <input
              id="password"
              type="password"
              className="outline-none w-full h-10 p-5"
              placeholder="Mật khẩu"
            />
          </div>
          <div className="group-form mt-5 flex justify-end">
            <div>
              <span>Bạn đã có tài khoản? </span>
              <Link
                to="/login"
                className="underline font-semibold text-blue-600"
              >
                Đăng nhập ngay
              </Link>
            </div>
          </div>
          <div className="group-form mt-5">
            <input
              type="submit"
              className="bg-blue-700 text-white text-xl font-semibold outline-none w-full py-3 mt-5"
              value="Đăng ký"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
