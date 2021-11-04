import axios from "axios";
import { call, takeLatest, put, delay } from "redux-saga/effects";
import { LOGIN } from "../constants/auth";
import _get from "lodash/get";
import { loginFaiure, loginSuccess } from "../actions/auth";

const url = "http://localhost:5555/api";
// auth/register

function login(data) {
  return axios({
    method: "post",
    url: `${url}/auth/login`,
    data,
  });
  // return axios.post(url, { usename: "timtim", password: "nhun" });
}
// function postUser(userInfor) {
//   axios.post("http://localhost:5000/users", userInfor);
// }

// const isLogin = localStorage.getItem("acess-token");

function* loginSagaFunc({ payload }) {
  const response = yield call(login, payload);
  const { data } = response;
  try {
    if (_get(response, "status") === 200) {
      yield put(loginSuccess(data));
      localStorage.setItem("loginSC", JSON.stringify(data));
    } else {
      yield put(loginFaiure("Sai tên đăng nhập hoặc mật khẩu"));
    }
  } catch (error) {
    yield put(loginFaiure("Sai tên đăng nhập hoặc mật khẩu"));
  }
}
// function* signupSagaFunc(userInfo) {
//   const user = userInfo.userInfo;
//   const response = yield call(fetchUser);
//   const userData = _get(response, "data", []);
//   let testUser = _find(userData, (i) => i.username === user.username);
//   if (!testUser) {
//     postUser(userInfo.userInfo);
//     localStorage.setItem("user-info", JSON.stringify(userInfo.userInfo));
//     yield put(signupUserSuccess(userInfo.userInfo));
//   } else {
//     yield put(signupUserFaiure("Tên đăng nhập đã tồn tại"));
//   }
// }
// function* logoutSagaFunc() {
//   yield localStorage.removeItem("user-info");
// }

export default function* authSaga() {
  yield takeLatest(LOGIN, loginSagaFunc);
  // yield takeLatest(SIGNUP_USER, signupSagaFunc);
  // yield takeLatest(LOGOUT_USER, logoutSagaFunc);
}
