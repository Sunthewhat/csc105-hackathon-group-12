import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import GuideTripPage from "./pages/GuideTripPage";
import GuideTripCreatePage from "./pages/GuideTripCreatePage";
import TestPage from "./pages/TestPage";
import UserPage from "./pages/UserPage";
import ListPage from "./pages/ListPage";
import Error from "./pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/location/:id" element={<LocationPage />} />
        <Route path="/guide" element={<GuideTripPage />} />
        <Route path="/guide/new/" element={<GuideTripCreatePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/location/all/:side" element={<ListPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
