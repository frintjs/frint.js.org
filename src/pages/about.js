import React from 'react';

const contributors = require('../static/data/contributors.json');

class About extends React.Component {

  renderContributors(contributors) {
    if (contributors.length > 0) {
      return contributors.map((contributor, index) => (
        <div className="column is-one-quarter" key={contributor.login}>
          <div className="contributor">
            <a target="_blank" href={contributor.html_url}>
              <img alt={contributor.name} src={contributor.avatar_url} />
              <h4 className="no-permalink">{contributor.name}</h4>
            </a>
          </div>
        </div>
      ));
    }
    else return [];
  }

  render() {
    const renderedContributors = this.renderContributors(contributors);

    return (
      <div className="columns is-multiline contributors">
        { renderedContributors }
      </div>
    );
  }
}

export default About
