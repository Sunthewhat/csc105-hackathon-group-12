import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import BeachProfile from "./pages/BeachProfile";
import LocationPage from "./pages/LocationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/beachprofile" element={<BeachProfile />} />
        <Route path="/location/:id" element={<LocationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
