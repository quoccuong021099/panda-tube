import produce from "immer";
import {
  GET_ALBUM,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAILED,
} from "../constants/photo";

export const initialState = {
  listAlbum: [],
  statusFlags: {
    isLoading: true,
  },
  logs: {
    err: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const photoReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_ALBUM: {
        draft.statusFlags.isLoading = true;
        break;
      }
      case GET_ALBUM_SUCCESS: {
        draft.statusFlags.isLoading = false;
        draft.listAlbum = action.payload.data;
        break;
      }
      case GET_ALBUM_FAILED: {
        draft.logs.err = action.message;
        draft.statusFlags.isLoading = false;
        break;
      }
    }
  });

export default photoReducer;
