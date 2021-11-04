import _get from "lodash/get";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Default } from "react-spinners-css";
import AlertErr from "../components/AlertErr";
import { login, resetFlag } from "../redux/actions/auth";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const statusFlags = useSelector((state) =>
    _get(state, "loginReducer.statusFlags")
  );
  const { err } = useSelector((state) => _get(state, "loginReducer.logs"));

  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(resetFlag());
    const action = login(data);
    dispatch(action);
  };

  React.useEffect(() => {
    if (_get(statusFlags, "isLoginSuccess")) history.push("/");
  }, [_get(statusFlags, "isLoginSuccess")]);
  return (
    <div className="flex justify-center items-center">
      <div className="w-[700px] h-auto bg-gray-100 p-10">
        <h1 className="text-center font-semibold text-black text-4xl uppercase">
          Login
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center p-10 flex-col"
        >
          <div className="group-form mt-5">
            <label
              htmlFor="username"
              className="inline-block mb-2 font-semibold text-xl"
            >
              Tên đăng nhập:
            </label>
            <input
              required
              id="username"
              type="text"
              {...register("username")}
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
              required
              id="password"
              type="password"
              {...register("password")}
              className="outline-none w-full h-10 p-5"
              placeholder="Mật khẩu"
            />
          </div>
          <div className="group-form mt-5 flex justify-end">
            <div>
              <span>Bạn chưa có tài khoản? </span>
              <Link
                to="/register"
                className="underline font-semibold text-blue-600"
              >
                Đăng ký ngay
              </Link>
            </div>
          </div>
          <div className="group-form mt-5">
            <button
              className="bg-blue-700 text-white text-xl font-semibold outline-none w-full py-3 mt-5 flex justify-center items-center
              "
              type="submit"
            >
              {_get(statusFlags, "isLoading") && (
                <Default color="white" size={20} className="mr-2" />
              )}
              <span>Đăng nhập</span>
            </button>
          </div>
        </form>
      </div>
      {err && <AlertErr title={err} duration={5} />}
    </div>
  );
}
