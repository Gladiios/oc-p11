import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_USER_NAME = "UPDATE_USER_NAME";

export const loginSuccess = (token) => {
  return { type: "LOGIN_SUCCESS", payload: token };
};

export const loginFailure = (error) => {
  return { type: "LOGIN_FAILURE", payload: error };
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
        dispatch(getUserProfile());
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

//Gestion de la déconnexion utilisateur
export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  return { type: "LOGOUT" };
};

//Récupération des données utilisateurs
export const getUserProfile = () => {
  return async (dispatch) => {
    let loginToken = sessionStorage.getItem("token");
    if (!loginToken) {
      loginToken = localStorage.getItem("token");
    }
    try {
      const getUserProfileResponse = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        }
      );
      if (getUserProfileResponse.status === 200) {
        const userProfile = getUserProfileResponse.data.body;
        dispatch({
          type: USER_PROFILE,
          payload: userProfile,
        });
      }
    } catch (error) {
      console.log("Error while getting user profile", error);
    }
  };
};

export const updateUsername = (userName) => {
  return async (dispatch) => {
    let loginToken = sessionStorage.getItem("token");
    if (!loginToken) {
      loginToken = localStorage.getItem("token");
    }
    try {
      const updateUsernameResponse = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        }
      );
      if (updateUsernameResponse.status === 200) {
        dispatch({
          type: UPDATE_USER_NAME,
          payload: userName,
        });
      }
    } catch (error) {
      console.log("couldn't update username", error);
    }
  };
};
