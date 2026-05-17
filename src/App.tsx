import "./assets/styles/index.css";
import "./assets/styles/main.css";
import "./assets/styles/normalize.css";

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { ProfilePage } from "./pages/profile-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
