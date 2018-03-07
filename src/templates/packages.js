import React from "react";
import Helmet from "react-helmet"

function PackageTemplate({ data }) {
    const page = data.markdownRemark;

    return (
      <div>
        <Helmet>
          <title>{page.frontmatter.title + ' | Frint'}</title>
          <meta name="description" content="FrintJS - The Modular JavaScript Framework" />
          <meta name="og:description" content="FrintJS - The Modular JavaScript Framework" />
          <meta name="twitter:description" content="FrintJS - The Modular JavaScript Framework" />
          <meta name="og:title" content={page.frontmatter.title} />
        </Helmet>
        <div
          dangerouslySetInnerHTML={{__html: page.html}}
        />
      </div>
    );
}

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
