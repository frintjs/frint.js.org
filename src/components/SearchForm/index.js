import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { enabled: true };
  }

  conponentWillMount() {
    if (
      typeof window === `undefined` || // eslint-disable-line no-undef
      typeof window.docsearch === `undefined` // eslint-disable-line no-undef
    ) {
      console.warn(`Search has failed to load and now is being disabled`);
      this.setState({ enabled: false });
    }
  }

  componentDidMount() {
    if (this.state.enabled) {
      // eslint-disable-next-line no-undef
      window.docsearch({
        apiKey: `897a7279c47670a5c4b474ee84350387`,
        indexName: `frint.js`,
        inputSelector: `#doc-search-text-box`,
        debug: false,
      });
    }
  }

  render() {
    const { enabled } = this.state;

    return enabled ? (
      <p className="control has-icon">
        <input className="input" id="doc-search-text-box" placeholder="Search..." type="text" />
        <span className="icon is-small">
          <i className="fa fa-search" />
        </span>
      </p>
    ) : null;
  }
}

export default SearchForm;
