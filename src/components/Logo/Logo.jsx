import LogoIcon from "../../assets/Svg/LogIcon";
import "./Logo.scss";

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
