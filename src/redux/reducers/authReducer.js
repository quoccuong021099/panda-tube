import produce from "immer";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, RESET } from "../constants/auth";

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
      case RESET: {
        draft.statusFlags.isLoading = initialState.statusFlags.isLoading;
        draft.statusFlags.isLoginSuccess =
          initialState.statusFlags.isLoginSuccess;
        draft.statusFlags.isLoginFailure =
          initialState.statusFlags.isLoginFailure;
        draft.currentUser = initialState.currentUser;
        draft.logs.err = initialState.logs.err;
        break;
      }
      case LOGIN: {
        draft.statusFlags.isLoading = true;
        break;
      }
      case LOGIN_SUCCESS: {
        draft.statusFlags.isLoading = false;
        draft.statusFlags.isLoginSuccess = true;
        draft.statusFlags.isLoginFailure = false;
        draft.currentUser = action.payload.user;
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
