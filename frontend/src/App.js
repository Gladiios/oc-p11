import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./pages/SignIn";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Sign />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
