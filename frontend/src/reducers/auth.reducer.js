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
      return { ...state, token: action.payload };
    case "LOGIN_FAILURE":
      return { ...state, error: action.payload };
    case "CLEAR_AUTH_ERROR":
      return { ...state, error: null };
    case "LOGOUT":
      return { ...initialState };
    case "USER_PROFILE":
      return { ...state, userProfile: action.payload };
    case "UPDATE_USER_NAME":
      const updatedProfile = { ...state.userProfile, userName: action.payload };
      return {
        ...state,
        userProfile: updatedProfile,
      };
    default:
      return state;
  }
};

export default authReducer;
