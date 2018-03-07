import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'

import '../static/styles/index.scss';
import 'prismjs/themes/prism-solarizedlight.css';

import SideBar from "../components/SideBar";
import AboutSideBar from "../components/AboutSideBar";
import Footer from "../components/Footer";

export default class Template extends React.Component {

  render() {
    if (this.props.location.pathname === '/') {
      return (
        <div>
          <Helmet
            title="FrintJS - The Modular JavaScript Framework"
            meta={[
              {name: 'description', content: 'Sample'},
              {name: 'keywords', content: 'sample, something'},
            ]}
          />

          {this.props.children()}

          <Footer/>

        </div>
      )
    } else if (this.props.location.pathname === '/repl' || this.props.location.pathname === '/repl/') {
      return (
        <div>
          <Helmet
            title="REPL | Frint"
            meta={[
              {name: 'description', content: 'Sample'},
              {name: 'keywords', content: 'sample, something'},
            ]}
          />
          <div className="page-repl">
            <nav className="nav main-nav">
              <Header/>
            </nav>

            {this.props.children()}
          </div>
          <Footer/>

        </div>
      )
    } else if (this.props.location.pathname === '/about' || this.props.location.pathname === '/about/') {
      return (
        <div>
          <Helmet
            title="About | Frint"
            meta={[
              {name: 'description', content: 'Sample'},
              {name: 'keywords', content: 'sample, something'},
            ]}
          />
            <nav className="nav main-nav">
              <Header/>
            </nav>

            <section className="section">
              <div className="container">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <AboutSideBar/>
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
          <Footer/>

        </div>
      )
    } else {
      return (
        <div>
          <Helmet
            title="Documentation | Frint"
            meta={[
              {name: 'description', content: 'Sample'},
              {name: 'keywords', content: 'sample, something'},
            ]}
          />

          <nav className="nav main-nav">
            <Header/>
          </nav>

          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-one-quarter">
                  <SideBar/>
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

          <Footer/>

        </div>
      )
    }
  }
}

