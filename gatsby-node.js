const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

function dedupeSlug(slug) {
  // duped slug '/fallingwater/fallingwater/'
  const parts = slug.split("/")
  // parts = ['', 'fallingwater', 'fallingwater', ''];

  if (parts.length < 4 || parts[1] !== parts[2]) {
    return slug
  }

  return `/${parts[1]}/`
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = dedupeSlug(
      createFilePath({
        node,
        getNode,
        basePath: "pages",
      })
    )

    /*
     * Creates a unique slug for each MarkdownRemark node
     * and attaches it as a queryable property from GraphQL.
     * Note: this has nothing to do with create a unique url end point
     * This simply attaches meta data to each node under the "fields"
     * object that you can query within GraphQL.
     *
     * node {
     *   frontmatter {
     *     name
     *   }
     *   html
     *   fields {
     *     slug
     *   }
     * }
     */
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(resolve => {
    graphql(`
      query FetchStructures {
        structures: allMarkdownRemark {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              title
              coverImage {
                src {
                  absolutePath
                }
                alt
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.structures.nodes.forEach(node => {
        const coverImageAbsPath = node.frontmatter.coverImage.src.absolutePath
        const coverImageFileName = coverImageAbsPath.split("/")[
          coverImageAbsPath.split("/").length - 1
        ]

        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/DetailPage.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
            coverImage: coverImageFileName,
          },
        })
      })
      resolve()
    })
  })
}
