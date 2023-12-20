//Styles
import "../styles/Logo.scss";

//React
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className={"logo"}>
      María Ripley
    </NavLink>
  );
}

export default Logo;
