import React from "react";
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <>
      <nav className="navbar  navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">Recat-redux-Cocktail-app</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
