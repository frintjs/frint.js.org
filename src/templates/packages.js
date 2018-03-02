import React from "react";
import Helmet from "react-helmet"

class PackageTemplate extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   html: ''
    // }
  }

  // componentDidMount() {
  //   console.log('this.props.data:', this.props.data);
  //   const {markdownRemark} = this.props.data; // data.markdownRemark holds our post data
  //   const {html} = markdownRemark;
  //
  //   this.setState({
  //     html: html
  //   });
  // }

  render() {
    const page = this.props.data.markdownRemark;

    return (
      <div>
        <Helmet>
          <title>{page.frontmatter.title + ' | Frint'}</title>
          <meta name="description" content={page.excerpt} />
          <meta name="og:description" content={page.excerpt} />
          <meta name="twitter:description" content={page.excerpt} />
          <meta name="og:title" content={page.frontmatter.title} />
          <meta name="og:type" content="article" />
          <meta name="twitter.label1" content="Reading time" />
          <meta name="twitter:data1" content={`${page.timeToRead} min read`} />
        </Helmet>
        <div
          dangerouslySetInnerHTML={{__html: page.html}}
        />
      </div>
    );
  }
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
