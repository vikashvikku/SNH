import Navigation from "./Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="snh">SNH</div>
      <Navigation />
    </header>
  );
};

export default Header;
