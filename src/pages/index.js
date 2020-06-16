import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "./index.css"
import SEO from "../components/seo"


const BlogPost = ({ node }) => {
  return (
    <Link to={node.slug} style={{ color: "black" }}>
      <div className="card">
        <img
          className="card-img-top"
          src={node.heroImage.file.url}
          alt={node.title}
        />
        <div className="card-body">
          <h5 className="card-title">{node.title}</h5>
          <h6 className="card-title">
            {new Date(node.createdAt).toDateString()}
          </h6>

          <p className="card-text">
            by @{node.author.name} <br />
            {node.description.description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default function Index({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="row">
        {data.allContentfulBlogPost.edges.map(edge => (
          <div className="col-xs-12 col-sm-6 col-md-4 mt-3" key={edge.node.slug}>
            <BlogPost node={edge.node} />
          </div>
        ))}
      </div>
      <br />
      <br />
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogPostQueryAndBlogPostQuery {
    allContentfulBlogPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            file {
              url
            }
          }
          author {
            name
          }
          createdAt
          description {
            description
          }
        }
      }
    }
  }
`
