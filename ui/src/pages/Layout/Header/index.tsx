import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';

import './style.css';

const Header = () => {
  return (
    <div className="wrapper">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="wrapper-button">
        <Link className="validate-link" to="/validate">
          Validate link
        </Link>
        <button className="btn-docs">Docs</button>
      </div>
    </div>
  );
};

export default Header;
