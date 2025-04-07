import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import CompaniesSection from './components/CompaniesSection';
import BusinessSection from './components/BusinessSection';
import Page2 from './components/Page2';
import IniSesion from './components/IniSesion'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <main id="main-content">
                <SearchSection />
                <CompaniesSection />
                <BusinessSection />
              </main>
            </>
          }
        />

        {/* Página Page2 */}
        <Route path="/page2" element={<Page2 />} />

        {/* Página de inicio de sesión */}
        <Route path="/IniSesion" element={<IniSesion />} />
      </Routes>
    </Router>
  );
}

export default App;

