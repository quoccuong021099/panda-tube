import axios from "axios";
import _get from "lodash/get";
import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getAlbumFaiure, getAlbumSuccess } from "../actions/photo";
import { GET_ALBUM } from "../constants/photo";

const url = "http://localhost:5555/api";

function getAllAlbum() {
  return axios.get(`${url}/album`);
}

function* alBumSagaFunc() {
  const response = yield call(getAllAlbum);
  yield delay(1000);
  try {
    if (_get(response, "status") === 200) {
      yield put(getAlbumSuccess(_get(response, "data")));
    } else {
      yield put(getAlbumFaiure("Đã có lỗi xảy ra ahihi"));
    }
  } catch (error) {
    console.log(error);
    yield put(getAlbumFaiure(error));
  }
}

export default function* photoSaga() {
  yield takeLatest(GET_ALBUM, alBumSagaFunc);
}
