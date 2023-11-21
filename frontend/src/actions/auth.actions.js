import axios from "axios";

export const loginSuccess = (token) => {
  return { type: "LOGIN_SUCCESS", payload: token };
};

export const loginFailure = (error) => {
  return { type: "LOGIN_FAILURE", payload: error };
};

//Gestion de la déconnexion utilisateur
export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  return { type: "LOGOUT" };
};

// Gestion de la connexion utilisateur
export const loginUser = (email, password, navigate, rememberMe) => {
  return async (dispatch) => {
    try {
      const loginResponse = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password }
      );
      if (loginResponse.status === 200) {
        const token = loginResponse.data.body.token;
        if (rememberMe) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }
        dispatch(loginSuccess(token));
        navigate("/profile");
      } else {
        // Gestion des cas où la réponse n'est pas 200
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
      }
    } catch (error) {
      dispatch(loginFailure("Identifiants incorrects"));
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    }
  };
};
