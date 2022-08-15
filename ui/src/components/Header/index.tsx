import Logo from "../../assets/logo.png";

import "./style.css";

const Header = () => {
  return (
    <div className="wrapper">
      <img src={Logo} alt="Logo" />
      <div className="wrapper-button">
        <a href="#">Validate Link</a>
        <button className="btn-docs">Docs</button>
      </div>
    </div>
  );
};

export default Header;
