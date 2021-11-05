import { createSelector } from "reselect";
import { initialState } from "../reducers/photoReducer";

/**
 * Direct selector to the app state domain
 */

const selectLoginDomain = (state) => {
  return state.photoReducer || initialState;
};

// const makeSelectLogin = () =>
//   createSelector(selectLoginDomain, (substate) => substate.currentUser);

// const makeSelectSignup = () =>
//   createSelector(selectLoginDomain, (substate) => substate.users);

const makeSelectStatusFlagsPhoto = () =>
  createSelector(selectLoginDomain, (substate) => substate.statusFlags);

const makeSelectErrorPhoto = () =>
  createSelector(selectLoginDomain, (substate) => substate.logs);

export {
  //   makeSelectLogin,
  makeSelectStatusFlagsPhoto,
  makeSelectErrorPhoto,
  // makeSelectSignup,
};
