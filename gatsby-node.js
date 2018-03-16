/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const path = require("path");
const fetch = require('isomorphic-fetch');


exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const packagesTemplate = path.resolve(`src/templates/packages.js`);

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              importFromGitHub
            }
          }
        }
      }
    }
  `)
    .then((result) => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: packagesTemplate,
          context: {}, // additional data can be passed via context
        });
      });
    });
};

// Create slugs for files.
exports.onCreateNode = ({ node }) => {
  if (node.internal.type === 'MarkdownRemark') {
    if (node.frontmatter.importFromGitHub) {
      const url = `https://raw.githubusercontent.com/${node.frontmatter.importFromGitHub}`;
      fetch(url)
        .then(data => data.text())
        .then((textData) => {
          node.internal.content = textData;
        });
    }
  }
}
