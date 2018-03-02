import React from 'react'
import logo from "../../../static/img/frint-logo-7a7a7a.png"
import logo1 from "../../../static/img/frint-logo-fff.png"
import SearchForm from '../SearchForm'
import Link from "gatsby-link"

const Header = () => (
  <div className="container">
    <div className="nav-left">
      <Link to="/" className="nav-item brand" activeClassName="is-active">
        <img alt="Frint" className="dark" src={logo} />
        <img alt="Frint" className="light" src={logo1} />
      </Link>

      <Link to="/docs" className="nav-item is-tab" activeClassName="is-active">
        Documentation
      </Link>

      <a href="https://medium.com/frintjs" className="nav-item is-tab">
        Blog
      </a>

      <Link to="/repl" className="nav-item is-tab" activeClassName="is-active">
        REPL
      </Link>

      <Link to="/about" className="nav-item is-tab" activeClassName="is-active">
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

export default Header
