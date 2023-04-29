import { Outlet, useNavigate } from "react-router-dom";
import Style from "./App.module.scss";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users"));
  if (users === null) {
    navigate("/");
  }
  useEffect(() => {
    users &&
      users.map((ele) => {
        if (ele.email) {
          navigate("/home");
        } else {
          alert("You don't have any account!");
          navigate("/");
        }
      });
  }, []);
  return (
    <div className={Style.root}>
      <Outlet />
    </div>
  );
}

export default App;
