import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'info'));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                data.length > 0 ? (
                  <Home
                    description={data[0].description}
                    github={data[0].github}
                    gitlab={data[0].gitlab}
                    linkedin={data[0].linkedin}
                    name={data[0].name}
                    role1={data[0].role1}
                    role2={data[0].role2}
                  />
                ) : (
                  <p>Loading...</p>
                )
              }
            />
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
