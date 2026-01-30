import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./Navbar"

// Import all your components with correct case-sensitive names
import SignIn from "./signin"
import SignUp from "./signUp"
import Dashboard from "./Dashboard"
import FruitJuice from "./FruitJuice"
import Profile from "./Profile"

function App() {
  return (
    <BrowserRouter>
      {/* Navbar will handle its own visibility logic */}
      <Navbar />

      <div style={{ height: "calc(100vh - 64px)" }}>
        <Routes>
          {/* Default route: redirect "/" to "/signin" */}
          <Route path="/" element={<Navigate to="/signin" replace />} />

          {/* Your app routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fruitjuice" element={<FruitJuice />} />
          <Route path="/profile" element={<Profile />} />

          {/* Optional: catch-all 404 route */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
