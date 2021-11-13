import produce from "immer";
import {
  GET_EXPLORE,
  GET_EXPLORE_SUCCESS,
  GET_EXPLORE_FAILED,
} from "../constants/explore";

export const initialState = {
  listVideo: [],
  statusFlags: {
    isGetExplore: false,
    isGetExploreSuccess: false,
  },
  logs: {
    err: null,
  },
};
/* eslint-disable default-case, no-param-reassign */
const exploreReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_EXPLORE:
        draft.statusFlags.isGetExplore = true;
        break;
      case GET_EXPLORE_SUCCESS:
        draft.statusFlags.isGetExplore = false;
        draft.statusFlags.isGetExploreSuccess = true;
        draft.listVideo = action.payload?.data;
        break;
      case GET_EXPLORE_FAILED:
        draft.statusFlags.isGetExplore = false;
        draft.logs.err = action.message;
        break;
    }
  });
export default exploreReducer;
