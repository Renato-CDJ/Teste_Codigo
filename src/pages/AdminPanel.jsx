
import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [stats, setStats] = useState({ atendimentos: 0 });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("atendimentos")) || [];
    setStats({ atendimentos: data.length });
  }, []);

  return (
    <div style={{padding:"40px"}}>
      <h2>Dashboard</h2>
      <p>Total de Atendimentos: {stats.atendimentos}</p>
    </div>
  );
}
