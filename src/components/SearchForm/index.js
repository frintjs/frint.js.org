import React, { Component } from "react"

class SearchForm extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (
      typeof window === `undefined` || // eslint-disable-line no-undef
      typeof window.docsearch === `undefined` // eslint-disable-line no-undef
    ) {
      console.warn(`Search has failed to load and now is being disabled`)
      this.setState({ enabled: false })
      return
    }
    // eslint-disable-next-line no-undef
    window.docsearch({
      apiKey: `897a7279c47670a5c4b474ee84350387`,
      indexName: `frint.js`,
      inputSelector: `#doc-search-text-box`,
      debug: false,
    })
  }
  render() {
    return (
      <p className="control has-icon">
        <input id="doc-search-text-box" className="input" type="text" placeholder="Search..."/>
        <span className="icon is-small">
            <i className="fa fa-search"></i>
          </span>
      </p>
    )
  }
}

export default SearchForm