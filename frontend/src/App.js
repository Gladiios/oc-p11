import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  // permet de conserver les informations de l'utilisateur et le token
  const authState = useSelector((state) => state.auth);
  useEffect(() => {
    localStorage.setItem("token", authState.token);
    localStorage.setItem("userProfile", JSON.stringify(authState.userProfile));
  }, [authState.token, authState.userProfile]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
