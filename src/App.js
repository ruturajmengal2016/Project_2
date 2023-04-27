import { Outlet } from "react-router-dom";
import Style from "./App.module.scss";
function App() {
  return (
    <div className={Style.root}>
      <Outlet /> 
    </div>
  );
}

export default App;
