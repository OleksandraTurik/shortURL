import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';

import './style.css';

const DOC_LINK = 'http://localhost:3000/api-doc';

const Header = () => {
  const handleClick = () => {
    window.open(DOC_LINK, '_blank');
  };

  return (
    <div className="wrapper">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="wrapper-button">
        <Link className="validate-link" to="/validate">
          Validate link
        </Link>
        <button onClick={handleClick} className="btn-docs">
          Docs
        </button>
      </div>
    </div>
  );
};

export default Header;
