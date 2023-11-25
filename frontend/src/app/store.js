import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";

// Fonction pour obtenir l'état initialisé à partir du storage
const getPreloadedState = () => {
  const token = localStorage.getItem("token");
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  return {
    auth: {
      token: token || null,
      userProfile: userProfile || null,
      isLoading: false,
      error: null,
    },
  };
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: getPreloadedState(),
  devTools: true,
});

export { store };
