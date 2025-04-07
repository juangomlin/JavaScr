import React from 'react';
import './IniSesion.css';

function IniSesion() {
  return (
    <div className="App">
      <header className="header">
        <div className="titulo">WORKABLE</div>
        <nav>
          <a href="#inicio">nav1</a>
          <a href="#ofertas">nav3</a>
          <a href="#salarios">nav4</a>
        </nav>
      </header>

      <main className="Titulo">
        <form>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </main>
    </div>
  );
}

export default IniSesion;
