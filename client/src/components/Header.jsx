//Styles
import "../styles/Header.scss";

//Routes
import Menu from "../routes/Menu";

//Components
import Logo from "./Logo";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Menu />
    </div>
  );
}

export default Header;
