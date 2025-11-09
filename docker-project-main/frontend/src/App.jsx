import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignIn from "./signin"
import SignUp from "./signup"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
