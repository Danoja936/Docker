import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./signup.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx"; // 👈 Import your new Dashboard component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* 👈 Add this route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
