import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const PackageTemplate = ({ data }) => {
  const page = data.markdownRemark;

  return (
    <div>
      <Helmet>
        <title>{ `${page.frontmatter.title} | Frint` }</title>
        <meta content="FrintJS - The Modular JavaScript Framework" name="description" />
        <meta content="FrintJS - The Modular JavaScript Framework" name="og:description" />
        <meta content="FrintJS - The Modular JavaScript Framework" name="twitter:description" />
        <meta content={page.frontmatter.title} name="og:title" />
      </Helmet>
      <div
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    </div>
  );
}

PackageTemplate.propTypes = {
  data: PropTypes.object,
};

PackageTemplate.defaultProps = {
  data: {},
};

export default PackageTemplate;

export const pageQuery = graphql`
  query MarkdownData($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        importContentFromPackage
        importContentFromRoot
      }
    }
  }
`;
