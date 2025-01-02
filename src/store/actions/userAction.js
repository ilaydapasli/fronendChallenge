import axios from "axios";
import { API } from "../../api/axiosWithAuth";

export const GET_USERS_SUCCESS = "gets an users from the API";
export const GET_USERS_FETCHING = "fetching users started";
export const GET_USERS_ERROR = "got an error from the API";

export const getUsers = () => (dispatch) => {
  dispatch(getUsersFetching());
  API.get("/users/2")
    .then((res) => {
      dispatch(getUsersSuccess(res.data.data));
    })
    .catch((err) => {
      console.error(err.message);
      dispatch(getUsersError(err.message));
    });
};

const getUsersFetching = () => {
  return {
    type: GET_USERS_FETCHING,
  };
};

const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

const getUsersError = (message) => {
  return {
    type: GET_USERS_ERROR,
    payload: message,
  };
};
