import './App.css';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';

function App() {
  
  // let navbar = document.querySelector('.navbar');
  // let menu = document.querySelector('#menu-icon');
  // menu.onClick = () => {
  //   menu.classList.toggle('bx-x');
  //   navbar.classList.toggle('open');
  // };
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
