import AuthLayout from "./components/layout/AuthLayout";
import Signup from "./pages/auth/Signup";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="farm-app">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="signup" element={<Signup />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
