import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          Code licensed under <a href="https://github.com/frintjs/frint/blob/master/LICENSE">MIT</a> &copy; <a href="https://github.com/frintjs/frint/graphs/contributors">FrintJS Authors</a> and <a href="https://travix.com">Travix International</a>.
        </p>
        <p>
          <a className="icon" title="GitHub" href="https://github.com/frintjs/frint">
            <i className="fa fa-github"></i>
          </a>

          <a className="icon" title="Twitter" href="https://twitter.com/frintjs">
            <i className="fa fa-twitter"></i>
          </a>

          <a className="icon" title="Medium" href="https://medium.com/frintjs">
            <i className="fa fa-medium"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer

