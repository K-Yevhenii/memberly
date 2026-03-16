import "./Logo.scss";
import LogoIcon from "../../assets/Icon/LogoIcon";
LogoIcon;
function Logo() {
  return (
    <div className="logo">
      <LogoIcon className="logo__icon" />
      <a href="#" className="logo__text">
        Nexcent
      </a>
    </div>
  );
}

export default Logo;
