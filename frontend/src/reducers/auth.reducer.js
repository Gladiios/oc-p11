import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  USER_PROFILE,
} from "../actions/auth.actions";

const initialState = {
  token: null,
  userProfile: null,
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, isLoading: true, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, isLoading: false, token: action.payload };
    case "LOGIN_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    case "LOGOUT":
      return { ...initialState };
    case "USER_PROFILE":
      return { ...state, isLoading: false, userProfile: action.payload };
    default:
      return state;
  }
};

export default authReducer;
