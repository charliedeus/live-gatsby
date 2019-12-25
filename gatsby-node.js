const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const post = path.resolve(`./src/templates/post.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node }) => {
      const { frontmatter } = node
      const { path } = frontmatter

      createPage({
        path: frontmatter.path,
        component: post,
        context: {
          slug: path,
        }
      })
    })
  })
};