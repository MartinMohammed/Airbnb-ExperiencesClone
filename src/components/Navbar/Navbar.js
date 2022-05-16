import "./Navbar.css";
import Logo from "../../Images/Vector.svg";

const Navbar = () => {
  return (
    <nav id="nav">
      <img className="nav-logo" src={Logo} alt="logo" />
    </nav>
  );
};

export default Navbar;
