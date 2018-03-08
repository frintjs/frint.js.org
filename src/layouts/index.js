import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import 'prismjs/themes/prism-solarizedlight.css';
import Header from '../components/Header';

import '../static/styles/index.scss';

import SideBar from "../components/SideBar";
import AboutSideBar from "../components/AboutSideBar";
import Footer from "../components/Footer";

export default class Template extends React.Component {
  render() {
    // Remove trailing / from the pathname except when it is the root path
    const pathName = (this.props.location.pathname !== '/' &&
      this.props.location.pathname[this.props.location.pathname.length - 1] === '/')
      ? this.props.location.pathname.slice(0, -1) : this.props.location.pathname;

    if (pathName === '/') {
      return (
        <div>
          <Helmet
            meta={[
              { name: 'description', content: 'FrintJS - The Modular JavaScript Framework' },
              { name: 'keywords', content: 'frint' },
            ]}
            title="FrintJS Documentation"
          />

          {this.props.children()}

          <Footer />

        </div>
      );
    } else if (pathName === '/repl') {
      return (
        <div>
          <Helmet
            meta={[
              { name: 'description', content: 'FrintJS - The Modular JavaScript Framework' },
              { name: 'keywords', content: 'frint' },
            ]}
            title="REPL | Frint"
          />
          <div className="page-repl">
            <nav className="nav main-nav">
              <Header />
            </nav>

            {this.props.children()}
          </div>
          <Footer />

        </div>
      );
    } else if (pathName === '/about') {
      return (
        <div>
          <Helmet
            meta={[
              { name: 'description', content: 'FrintJS - The Modular JavaScript Framework' },
              { name: 'keywords', content: 'frint' },
            ]}
            title="About | Frint"
          />
          <nav className="nav main-nav">
            <Header />
          </nav>

          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-one-quarter">
                  <AboutSideBar />
                </div>

                <div className="column content">
                  <h1 id="history">History</h1>
                  <p>FrintJS was originally built at <a href="https://travix.com">Travix International</a> for building applications in a faster, modular and more scalable way.</p>
                  <h2 id="contributors">Contributors</h2>
                  <div>
                    {this.props.children()}

                    <p>More on <a href="https://github.com/frintjs/frint/graphs/contributors">GitHub</a>.</p>

                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />

        </div>
      );
    }
    return (
      <div>
        <Helmet
          meta={[
            { name: 'description', content: 'FrintJS - The Modular JavaScript Framework' },
            { name: 'keywords', content: 'frint' },
          ]}
          title="Documentation | Frint"
        />

        <nav className="nav main-nav">
          <Header />
        </nav>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-one-quarter">
                <SideBar />
              </div>

              <div className="column content">
                <div
                  style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                  }}
                >
                  {this.props.children()}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />

      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.object,
};

Template.defaultProps = {
  location: {
    pathname: '/',
  },
};

