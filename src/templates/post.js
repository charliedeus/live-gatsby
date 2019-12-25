import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data: { markdownRemark } }) => {
  const { html, frontmatter } = markdownRemark
  const { title, date } = frontmatter

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{ title }</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>

      <Link to="/">Go to Home</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`

export default IndexPage
