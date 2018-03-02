import React from 'react'
import Header from '../components/Header'


const IndexPage = (data) =>{
  return (
    <div>
      <section className="hero is-primary is-large">
        <div className="hero-head">
          <header className="nav">
              <Header/>

              <a href="https://github.com/frintjs/frint" className="github-corner" aria-label="View source on Github">
                <svg width="80" height="80" viewBox="0 0 250 250" style={{'fill': '#151513', 'color':'#fff', 'position': 'absolute', 'top': 0, 'border': 0, 'right': 0}} aria-hidden="true">
                  <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                  <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{'transformOrigin': '130px 106px'}} className="octo-arm"></path>
                  <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
                </svg>
              </a>
            </header>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Modular <span>JavaScript</span> framework<br />
                for building <span>Scalable</span> &amp; <span>Reactive</span> applications.
              </h1>

              <div>
                <a href="/docs" className="button is-primary is-medium">Learn more</a>
                <a href="http://github.com/frintjs/frint" className="button is-transparent is-medium">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section about">
          <div className="container">
            <div className="columns">
              <div className="column">
                <img alt="Modular" src="/img/js-logo.png" />

                <h3>Modular & Extensible</h3>

                <p>
                  The whole framework is split into multiple independent packages.
                  You get to compose your Apps with only the packages your need.
                </p>
              </div>

              <div className="column">
                <img alt="Component" src="/img/react-logo.svg" />

                <h3>Component-Based</h3>

                <p>
                  You can roll your own Component based view libraries with Frint.
                  We have official support for React.
                </p>
              </div>

              <div className="column">
                <img alt="Reactive" src="/img/rxjs-logo.png" />

                <h3>Reactive Development</h3>

                <p>
                  We embraced the power of reactive programming everywhere, including app-to-app communication for ease of development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section apps">
          <div className="container">
            <h2>Split your application across multiple apps</h2>

            <img alt="apps" src="/img/frint-apps.png" />

            <p>
              Learn how to write <a href="/guides/apps"> Root Apps &amp; Child Apps </a>
              targeting different <a href="/guides/regions">Regions</a>.
            </p>
          </div>
        </section>

        <section className="section regions">
          <div className="container">
            <h2>Load apps coming in from separate bundles</h2>

            <img alt="apps" src="/img/frint-code-splitting.png" />

            <p>
              Learn more about
              <a href="/guides/apps"> Apps</a> and
              <a href="/guides/regions"> Regions</a>, and
              <a href="/guides/code-splitting"> Code Splitting</a>.
            </p>
          </div>
        </section>
    </div>

  )
}

export default IndexPage