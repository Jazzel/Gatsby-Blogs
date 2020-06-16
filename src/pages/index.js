import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"

import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import IconButton from "@material-ui/core/IconButton"
import { Typography, Grid, Avatar } from "@material-ui/core"
import { red } from "@material-ui/core/colors"

import CardActionArea from "@material-ui/core/CardActionArea"
const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

const BlogPost = ({ node }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <Link to={node.slug} style={{ textDecoration: "none", color: "black" }}>
          <CardActionArea>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {node.author.name.charAt(0)}
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title={node.title}
              subheader={new Date(node.createdAt).toDateString()}
            />
            <CardMedia
              className={classes.media}
              image={node.heroImage.file.url}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body1" color="textSecondary" component="p">
                by @{node.author.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {node.description.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={3}>
      {data.allContentfulBlogPost.edges.map(edge => (
        <BlogPost key={edge.node.slug} node={edge.node} />
      ))}
    </Grid>
  </Layout>
)

export default IndexPage

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
