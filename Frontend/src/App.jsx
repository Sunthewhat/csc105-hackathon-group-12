import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage"
import BeachProfile from './pages/BeachProfile'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/beachprofile" element={<BeachProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
