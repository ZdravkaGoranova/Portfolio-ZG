import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

 const handleMenuToggle = () => {
   setIsOpen(!isOpen); 
 };

  return (
    <>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <a href="#" className="logo">
          <span>P</span>ortfolio <span>Z</span>G
        </a>
        <ul className={isOpen ? 'open' : ''}>
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
        <div className="menu-btn" onClick={handleMenuToggle}>
          <span>INTRO</span>
          <a
            href="#"
            className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}
            id="menu-icon"
          ></a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
