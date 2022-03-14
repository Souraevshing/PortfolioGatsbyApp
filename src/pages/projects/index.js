import React from "react"
import { graphql, Link } from "gatsby"

import * as styles from "../../styles/project.module.css"
import Layout from "../components/Layout"

const index = ({ data }) => {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & websites I've created</h3>
        <div>
          {projects.map(project => (
            <div>
              <h3>{project.html}</h3>
              <p>{project.frontmatter.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const queryString = graphql`
  query Projects {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          title
        }
        id
      }
    }
  }
`

export default index
