import "./Header.scss";
import Logo from "../Logo";
import Navigation from "../Navigation";
import Login from "../Login";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <Navigation />
        <Login />
      </div>
    </header>
  );
}

export default Header;
