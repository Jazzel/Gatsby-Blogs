import React from "react"
import { Link } from "gatsby"
import "./../pages/index.css"

function Copyright() {
  return (
    <p  className="text-center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Jazz-hash">
        Muhammad Jazzel Mehmood - jazzelmehmood4@gmail.com -
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </p>
  )
}

export const Footer = props => {

  return (
    <footer>
      <h6 className="text-center">Muhammad Jazzel Mehmood</h6>
      <p className="text-center">
        Github Repo:{" "}
        <a href="https://github.com/Jazz-hash/Gatsby-Blogs">
          https://github.com/Jazz-hash/Gatsby-Blogs
        </a>
      </p>
      <Copyright />
    </footer>
  )
}
