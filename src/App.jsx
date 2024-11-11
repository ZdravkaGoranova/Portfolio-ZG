import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="/service" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
