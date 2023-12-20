import { NavLink } from "react-router-dom";
import "../styles/Btn.scss";

function Btn({ path, name }) {
  return (
    <NavLink to={path} className={"btn"}>
      {name}
    </NavLink>
  );
}

export default Btn;
