import { createSelector } from "reselect";
import { initialState } from "../reducers/loginReducer";

/**
 * Direct selector to the app state domain
 */

const selectLoginDomain = (state) => {
  return state.loginReducer || initialState;
};

const makeSelectLogin = () =>
  createSelector(selectLoginDomain, (substate) => substate.currentUser);

// const makeSelectSignup = () =>
//   createSelector(selectLoginDomain, (substate) => substate.users);

const makeSelectStatusFlagsLogin = () =>
  createSelector(selectLoginDomain, (substate) => substate.statusFlags);

const makeSelectErrorLogin = () =>
  createSelector(selectLoginDomain, (substate) => substate.logs);

export {
  makeSelectLogin,
  makeSelectStatusFlagsLogin,
  makeSelectErrorLogin,
  // makeSelectSignup,
};
