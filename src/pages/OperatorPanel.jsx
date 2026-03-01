
import ScriptNavigator from "../components/ScriptNavigator";
import Sidebar from "../components/Sidebar";

export default function OperatorPanel() {
  return (
    <div style={{display:"flex",height:"100vh"}}>
      <Sidebar />
      <ScriptNavigator />
    </div>
  );
}
