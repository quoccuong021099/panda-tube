import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  RESET,
} from "../constants/auth";

// LOGIN
export const login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
export const loginFaiure = (message) => {
  return {
    type: LOGIN_FAILED,
    message,
  };
};

// RESET ALL
export const resetFlag = () => {
  return {
    type: RESET,
  };
};

// // REGISTER
// export const REGISTER = () => {
//   return {
//     type: REGISTER,
//   };
// };
// export const REGISTERSuccess = (payload) => {
//   return {
//     type: REGISTER_SUCCESS,
//     payload,
//   };
// };
// export const REGISTERFaiure = (message) => {
//   return {
//     type: REGISTER_FAILED,
//     message,
//   };
// };
