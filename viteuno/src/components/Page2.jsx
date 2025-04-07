import React from 'react';
import './Page2.css';

function Page2() {
  return (
    <div className="App">
      <header className="header">
        <div className="titulo">WORKABLE</div>
        <nav>
          <a href="#inicio">nav</a>
          <a href="#ofertas">nav</a>
          <a href="#salarios">nav</a>
        </nav>
      </header>

      <main className="Titulo">
        <h1>h1</h1>
        <div className="link-ayuda">
          <a href="ayuda">a</a>
        </div>

        <div id="Dv1">
          <input type="text" placeholder="input" className="busqueda" />
          <button className="boton-busqueda">button</button>
        </div>

        <div className="filters-container">
          <div className="filter-section">
            <h2>h2</h2>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
            </div>
          </div>

          <div className="filter-section">
            <h2>h2</h2>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
              <label>
                <input type="checkbox" /> checkbox
              </label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page2;