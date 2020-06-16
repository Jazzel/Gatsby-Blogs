import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPost extends Component {
  render() {
    const { title, body, heroImage } = this.props.data.contentfulBlogPost
    return (
      <Layout>
        <SEO title={title} />
          <img src={heroImage.file.url} alt="blog" />
        <div>
          <h1>{title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
          ></div>
        </div>
      </Layout>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        file {
          url
        }
      }
    }
  }
`
