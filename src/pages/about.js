import React from 'react';

const contributorsJson = require('../static/data/contributors.json');

const About = () => {
  const renderContributors = (contributors) => {
    if (contributors.length > 0) {
      return contributors.map(contributor => (
        <div className="column is-one-quarter" key={contributor.login}>
          <div className="contributor">
            <a href={contributor.html_url} target="_blank">
              <img alt={contributor.name} src={contributor.avatar_url} />
              <h4 className="no-permalink">{contributor.name}</h4>
            </a>
          </div>
        </div>
      ));
    }
    return [];
  };

  const renderedContributors = renderContributors(contributorsJson);

  return (
    <div className="columns is-multiline contributors">
      { renderedContributors }
    </div>
  );
};

export default About;
