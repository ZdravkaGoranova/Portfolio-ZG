import './Header.css';
import Nabar from '../Navbar/Navbar.jsx';

import PropTypes from 'prop-types';

const Header = ({ theme, toggleTheme }) => {
  return (
    <>
      <header>
        <Nabar theme={theme} toggleTheme={toggleTheme} />
      </header>
    </>
  );
};

export default Header;

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
