import { Outlet } from "react-router-dom";
import Footer from "./Pages/Footer";
import Style from './App.module.scss'
function App() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
