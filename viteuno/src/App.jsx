import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import CompaniesSection from './components/CompaniesSection';
import BusinessSection from './components/BusinessSection';
import Page2 from './components/Page2';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Ruta para la página principal */}
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
        {/* Ruta para la página de Misra (ahora Page2) */}
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;

