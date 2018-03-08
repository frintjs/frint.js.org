import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          Code licensed under <a href="https://github.com/frintjs/frint/blob/master/LICENSE">MIT</a> &copy; <a href="https://github.com/frintjs/frint/graphs/contributors">FrintJS Authors</a> and <a href="https://travix.com">Travix International</a>.
        </p>
        <p>
          <a className="icon" href="https://github.com/frintjs/frint" title="GitHub">
            <i className="fa fa-github" />
          </a>

          <a className="icon" href="https://twitter.com/frintjs" title="Twitter">
            <i className="fa fa-twitter" />
          </a>

          <a className="icon" href="https://medium.com/frintjs" title="Medium">
            <i className="fa fa-medium" />
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

