import { call, delay, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import _get from "lodash/get";
import { getExploreFailure, getExploreSuccess } from "../actions/explore";
import { GET_EXPLORE } from "../constants/explore";

const url = "http://localhost:5555/api";

function getAllVideo() {
  return axios.get(`${url}/explore`);
}

function* exploreSagaFunc() {
  const response = yield call(getAllVideo);
  yield delay(2000);
  try {
    if (_get(response, "status") === 200)
      yield put(getExploreSuccess(_get(response, "data")));
  } catch (error) {
    yield put(getExploreFailure(error));
  }
}

export default function* exploreSaga() {
  yield takeLatest(GET_EXPLORE, exploreSagaFunc);
}
