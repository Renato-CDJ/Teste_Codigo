
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(username, password)) {
      username === "admin" ? navigate("/admin") : navigate("/operator");
    } else {
      alert("Login inválido");
    }
  };

  return (
    <div style={{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center"}}>
      <div>
        <h2>Sistema Roteiro</h2>
        <input placeholder="Usuário" onChange={e=>setUsername(e.target.value)} /><br/>
        <input type="password" placeholder="Senha" onChange={e=>setPassword(e.target.value)} /><br/>
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}
