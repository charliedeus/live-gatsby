import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      <SEO title="Home" />

      <div>
        { edges.map (item => {
          const { title, path, date } = item.node.frontmatter

          return (
            <Link to={`/${path}`} key={path}>
              <p>{ title }</p>
          <p>{ date }</p>
            </Link>
          )
        }) }
      </div>

    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "DD/MM")
            path
          }
        }
      }
    }
  }
`

export default IndexPage
