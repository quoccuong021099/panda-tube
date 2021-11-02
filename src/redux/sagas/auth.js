import axios from "axios";
import { call, takeLatest, put, delay } from "redux-saga/effects";
import { LOGIN } from "../constants/auth";
import _get from "lodash/get";
import { loginFaiure, loginSuccess } from "../actions/auth";

const url = "http://localhost:5000/api/auth/login";

function login(data) {
  return axios({
    method: "post",
    url,
    data,
  });
  // return axios.post(url, { usename: "timtim", password: "nhun" });
}
// function fetchUser() {
//   return axios({
//     method: "GET",
//     url: "http://localhost:5000/users",
//   });
// }
// function postUser(userInfor) {
//   axios.post("http://localhost:5000/users", userInfor);
// }

// const isLogin = localStorage.getItem("acess-token");

function* loginSagaFunc(userInfo) {
  const response = yield call(login, _get(userInfo, "payload"));
  // const getAccessToken = _get(response, "data.accessToken");
  yield delay(2000);
  try {
    if (_get(response, "status") === 200) {
      yield put(loginSuccess(response));
      // yield localStorage.setItem("acess-token", JSON.stringify(getAccessToken));
    }
  } catch (error) {
    yield put(loginFaiure(error));
  }
  // const user = userInfo.userInfo;
  // const userData = _get(response, "data", []);
  // let testUser = _find(
  //   userData,
  //   (i) => i.username === user.username && i.password === user.password
  // );
  // if (testUser) {
  //   localStorage.setItem("user-info", JSON.stringify(testUser));
  //   yield put(loginUserSuccess(testUser));
  // } else {
  //   yield put(loginUserFaiure("Sai tài khoản hoặc mật khẩu"));
  // }
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
