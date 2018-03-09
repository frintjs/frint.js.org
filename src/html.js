import React from 'react';
import PropTypes from 'prop-types';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          dangerouslySetInnerHTML={{ __html: stylesStr }}
          id="gatsby-inlined-css"
        />
      );
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta content="ie=edge" httpEquiv="x-ua-compatible" />
          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />
          {css}
          {this.props.headComponents}
          <script src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js" />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            id="___gatsby"
            key={`body`}
          />
          {this.props.postBodyComponents}
          <link href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css" rel="stylesheet" />
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  body: PropTypes.string.isRequired,
  bodyAttributes: PropTypes.object,
  headComponents: PropTypes.node.isRequired,
  htmlAttributes: PropTypes.object,
  postBodyComponents: PropTypes.node.isRequired,
  preBodyComponents: PropTypes.node.isRequired,
};

HTML.defaultProps = {
  bodyAttributes: {},
  htmlAttributes: {},
};
