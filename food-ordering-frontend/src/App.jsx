import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CartSidebar from "./components/CartSidebar";

import Home from "./pages/Home";
import Orders from "./pages/MyOrders";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ important

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <Routes>

            {/* ===== Public Routes ===== */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

         
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

          </Routes>
        </div>
        <CartSidebar />
      </div>
    </Router>
  );
}

export default App;
