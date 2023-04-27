import { Outlet } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";
import Style from "./App.module.scss";
function App() {
  return (
    <div className={Style.root}>
      <Outlet />
      {/* <Footer />  */}
    </div>
  );
}

export default App;
