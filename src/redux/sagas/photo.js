import axios from "axios";
import _get from "lodash/get";
import { call, put, takeLatest, delay } from "redux-saga/effects";
import {
  createAlbumFaiure,
  createAlbumSuccess,
  getAlbumFaiure,
  getAlbumSuccess,
} from "../actions/photo";
import { CREATE_ALBUM, GET_ALBUM } from "../constants/photo";

const url = "http://localhost:5555/api";

function getAllAlbum() {
  return axios.get(`${url}/album`);
}
function createAlbum(data) {
  return axios({
    method: "post",
    url: `${url}/create-album`,
    data,
  });
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
    yield put(getAlbumFaiure(error));
  }
}
function* createAlBumSagaFunc({ payload }) {
  const response = yield call(createAlbum, payload);
  yield delay(1000);
  try {
    if (_get(response, "status") === 201) {
      yield put(createAlbumSuccess(_get(response, "data")));
    } else {
      yield put(createAlbumFaiure("Đã có lỗi xảy ra ahihi"));
    }
  } catch (error) {
    yield put(createAlbumFaiure(error));
  }
}

export default function* photoSaga() {
  yield takeLatest(GET_ALBUM, alBumSagaFunc);
  yield takeLatest(CREATE_ALBUM, createAlBumSagaFunc);
}
