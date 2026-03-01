
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(user, pass)) {
      user === "admin" ? navigate("/admin") : navigate("/operator");
    } else {
      alert("Login inválido");
    }
  };

  return (
    <div style={{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center"}}>
      <div>
        <h2>Sistema Roteiro</h2>
        <input placeholder="Usuário" onChange={e=>setUser(e.target.value)} /><br/>
        <input placeholder="Senha" type="password" onChange={e=>setPass(e.target.value)} /><br/>
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}
