import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "../../styles/global.css"

const Navbar = () => {
  const queryString = graphql`
    query Navbar {
      site {
        siteMetadata {
          title
        }
      }
    }
  `

  const data = useStaticQuery(queryString)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
