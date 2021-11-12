import { all } from "redux-saga/effects";
import authSaga from "./auth";
import photoSaga from "./photo";
import exploreSaga from "./explore";

export default function* rootSaga() {
  yield all([authSaga(), photoSaga(), exploreSaga()]);
}
