export const loginRequest = () => {
  return { type: "LOGIN_REQUEST" };
};

export const loginSuccess = (token) => {
  return { type: "LOGIN_SUCCESS", payload: token };
};

export const loginFailure = (error) => {
  return { type: "LOGIN_FAILURE", payload: error };
};

export const logout = () => {
  return { type: "LOGOUT" };
};
