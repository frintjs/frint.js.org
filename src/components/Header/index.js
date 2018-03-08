import React from 'react';
import Link from "gatsby-link";
import SearchForm from '../SearchForm';

const Header = () => (
  <div className="container">
    <div className="nav-left">
      <Link activeClassName="is-active" className="nav-item brand" to="/">
        <img alt="Frint" className="dark" src="/img/frint-logo-7a7a7a.png" />
        <img alt="Frint" className="light" src="/img/frint-logo-fff.png" />
      </Link>

      <Link activeClassName="is-active" className="nav-item is-tab" to="/docs">
        Documentation
      </Link>

      <a className="nav-item is-tab" href="https://medium.com/frintjs">
        Blog
      </a>

      <Link activeClassName="is-active" className="nav-item is-tab" to="/repl">
        REPL
      </Link>

      <Link activeClassName="is-active" className="nav-item is-tab" to="/about">
        About
      </Link>
    </div>

    <div className="nav-right">
      <div className="field nav-item">
        <SearchForm />
      </div>
    </div>
  </div>
);

export default Header;
