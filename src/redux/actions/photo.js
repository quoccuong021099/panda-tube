import {
  GET_ALBUM,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAILED,
  CREATE_ALBUM,
  CREATE_ALBUM_SUCCESS,
  CREATE_ALBUM_FAILED,
  RESET_FLAG_PHOTO,
} from "../constants/photo";

// GET album
export const getAlbum = () => {
  return {
    type: GET_ALBUM,
  };
};
export const getAlbumSuccess = (payload) => {
  return {
    type: GET_ALBUM_SUCCESS,
    payload,
  };
};
export const getAlbumFaiure = (message) => {
  return {
    type: GET_ALBUM_FAILED,
    message,
  };
};
// Create album
export const createAlbum = (payload) => {
  return {
    type: CREATE_ALBUM,
    payload,
  };
};
export const createAlbumSuccess = (payload) => {
  return {
    type: CREATE_ALBUM_SUCCESS,
    payload,
  };
};
export const createAlbumFaiure = (message) => {
  return {
    type: CREATE_ALBUM_FAILED,
    message,
  };
};

// RESET_FLAG_PHOTO
export const resetFlagPhoto = () => {
  return {
    type: RESET_FLAG_PHOTO,
  };
};
