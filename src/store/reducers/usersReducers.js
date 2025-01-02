import {
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USERS_FETCHING,
} from "../actions/userAction";

const initialState = {
  users: [],
  isFetching: false,
  error: "",
};

export const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_FETCHING:
      return { ...state, isFetching: true, error: "" };
    case GET_USERS_SUCCESS:
      return { ...state, isFetching: false, users: action.payload };
    case GET_USERS_ERROR:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
