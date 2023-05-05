import { Outlet, useNavigate } from "react-router-dom";
import Style from "./App.module.scss";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("login") &&
      JSON.parse(localStorage.getItem("login"))
    ) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div className={Style.root}>
      <Outlet />
    </div>
  );
}

export default App;
