
import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("atendimentos")) || [];
    setTotal(data.length);
  }, []);

  return (
    <div style={{padding:"40px"}}>
      <h2>Dashboard</h2>
      <p>Total de Atendimentos Registrados: {total}</p>
    </div>
  );
}
