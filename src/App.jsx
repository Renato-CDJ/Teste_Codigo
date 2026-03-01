
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import OperatorPanel from "./pages/OperatorPanel";
import AdminPanel from "./pages/AdminPanel";
import { AuthProvider, useAuth } from "./auth/AuthContext";

function Protected({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/operator" element={<Protected><OperatorPanel /></Protected>} />
          <Route path="/admin" element={<Protected role="admin"><AdminPanel /></Protected>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
