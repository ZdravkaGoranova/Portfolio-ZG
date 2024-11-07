import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <a href="#" className="logo">
          <span>P</span>ortfolio
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
        <div className="menu-btn">
          <span>INTRO</span>
          <a href="#">
            <i className="bx bx-menu" id='menu-icon'></i>
          </a>
          {/* <div className="bx bx-menu"></div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
