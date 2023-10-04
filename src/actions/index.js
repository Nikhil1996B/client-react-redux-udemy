import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";
export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://tqs3gz-3090.csb.app/signup",
      formProps,
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: "Email is in use" });
  }
};

export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://tqs3gz-3090.csb.app/signin",
      formProps,
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: "",
  };
};
