import {
  GET_EXPLORE,
  GET_EXPLORE_SUCCESS,
  GET_EXPLORE_FAILED,
} from "../constants/explore";

// get explore video
export const getExplore = () => {
  return {
    type: GET_EXPLORE,
  };
};
export const getExploreSuccess = (payload) => {
  console.log("payload", payload);
  return {
    type: GET_EXPLORE_SUCCESS,
    payload,
  };
};
export const getExploreFailure = (message) => {
  return {
    type: GET_EXPLORE_FAILED,
    message,
  };
};
