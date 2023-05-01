import { Outlet, useNavigate} from "react-router-dom";
import Style from "./App.module.scss";
import { useEffect } from "react";
import { getUsers } from "./utils/localstorage";
function App() {
  const navigate = useNavigate()
  const users = getUsers()
  useEffect(()=>{
    users && users.forEach(ele => {
      if(ele.email === users.email){
        navigate("/home")
      }else{
        navigate("/")
      }
    })
  },[])
  return (
    <div className={Style.root}>
      <Outlet />
    </div>
  );
}

export default App;
