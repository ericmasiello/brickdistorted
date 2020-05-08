const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise(resolve => {
    graphql(`
      query FetchStructures {
        structures: allMarkdownRemark {
          nodes {
            id
            frontmatter {
              title
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.structures.nodes.forEach(node => {
        const regexSlug = `/slug: ${node.frontmatter.slug}/i`;

        console.log('creating a page for: ', node.frontmatter.slug);
        createPage({
          path: node.frontmatter.slug,
          component: path.resolve(`./src/templates/DetailPage.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            regexSlug,
            slug: node.frontmatter.slug,
          },
        });
      });
      resolve();
    });
  });
};
