/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
   {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then((result) => {
    result.data.allContentfulProject.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          slug: node.slug
        }
      })
    })
  })
}
