
import { useState } from "react";
import scriptData from "../data/habitacional-script.json";

export default function ScriptNavigator() {
  const marca = scriptData.marcas.HABITACIONAL;
  const [currentStep, setCurrentStep] = useState("hab1_abordagem");
  const [search, setSearch] = useState("");

  const step = marca[currentStep];

  const handleSearch = () => {
    const found = Object.values(marca).find(s =>
      s.title.toLowerCase().includes(search.toLowerCase())
    );
    if (found) setCurrentStep(found.id);
  };

  const registerClick = (next) => {
    const history = JSON.parse(localStorage.getItem("atendimentos")) || [];
    history.push({ step: next, date: new Date().toISOString() });
    localStorage.setItem("atendimentos", JSON.stringify(history));
    setCurrentStep(next);
  };

  return (
    <div style={{flex:1,padding:"40px"}}>
      <input
        placeholder="Buscar etapa..."
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {step && (
        <div>
          <h2>{step.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: step.body }} />
          {step.buttons?.map((btn, i)=>(
            <button key={i} onClick={()=>registerClick(btn.next)}>
              {btn.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
