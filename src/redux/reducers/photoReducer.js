import produce from "immer";
import {
  GET_ALBUM,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAILED,
  CREATE_ALBUM,
  CREATE_ALBUM_SUCCESS,
  CREATE_ALBUM_FAILED,
  RESET_FLAG_PHOTO,
} from "../constants/photo";

export const initialState = {
  listAlbum: [],
  statusFlags: {
    isLoading: true,
    isCreateAlBum: false,
    isCreateAlBumSuccess: false,
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
      case CREATE_ALBUM: {
        draft.statusFlags.isCreateAlBum = true;
        draft.statusFlags.isCreateAlBumSuccess = false;
        break;
      }
      case CREATE_ALBUM_SUCCESS: {
        draft.statusFlags.isCreateAlBum = false;
        draft.statusFlags.isCreateAlBumSuccess = true;
        draft.listAlbum.push(action.payload);
        break;
      }
      case CREATE_ALBUM_FAILED: {
        draft.logs.err = action.message;
        draft.statusFlags.isCreateAlBumSuccess = false;
        draft.statusFlags.isCreateAlBum = false;
        console.log(action, "123");
        break;
      }
      case RESET_FLAG_PHOTO: {
        draft.logs.err = initialState.logs.err;
        draft.statusFlags.isCreateAlBumSuccess =
          initialState.statusFlags.isCreateAlBumSuccess;
        draft.statusFlags.isCreateAlBum =
          initialState.statusFlags.isCreateAlBum;
        break;
      }
    }
  });

export default photoReducer;
