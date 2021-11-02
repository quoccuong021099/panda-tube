import produce from "immer";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../constants/auth";

export const initialState = {
  currentUser: null,
  statusFlags: {
    isLoading: false,
    isLoginFailure: false,
    isLoginSuccess: false,
  },
  logs: {
    err: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN: {
        draft.statusFlags.isLoading = true;
        break;
      }
      case LOGIN_SUCCESS: {
        draft.statusFlags.isLoading = false;
        draft.statusFlags.isLoginSuccess = true;
        draft.statusFlags.isLoginFailure = false;
        draft.currentUser = action.payload;
        break;
      }
      case LOGIN_FAILED: {
        draft.logs.err = action.message;
        draft.statusFlags.isLoading = false;
        draft.statusFlags.isLoginSuccess = false;
        draft.statusFlags.isLoginFailure = true;
        break;
      }
    }
  });

export default loginReducer;
