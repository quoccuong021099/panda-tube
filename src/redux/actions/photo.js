import {
  GET_ALBUM,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAILED,
} from "../constants/photo";

// GET album
export const getAlbum = (payload) => {
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
// export const getAlbum = (payload) => {
//   return {
//     type: GET_ALBUM,
//   };
// };
// export const getAlbumSuccess = (payload) => {
//   return {
//     type: GET_ALBUM_SUCCESS,
//     payload,
//   };
// };
// export const getAlbumFaiure = (message) => {
//   return {
//     type: GET_ALBUM_FAILED,
//     message,
//   };
// };
