import { all } from "redux-saga/effects";
import authSaga from "./auth";
import photoSaga from "./photo";

export default function* rootSaga() {
  yield all([authSaga(), photoSaga()]);
}
