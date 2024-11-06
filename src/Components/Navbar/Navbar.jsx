import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <a href="#" className="logo">
          Portfolio
        </a>
        <ul>
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Contatct</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
