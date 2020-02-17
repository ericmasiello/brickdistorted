import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      structures: allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            coverImage {
              alt
              src {
                name
              }
            }
          }
        }
      }
      coverImages: allImageSharp {
        nodes {
          fluid {
            originalName
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Bricks Distorted</h1>
      <ul>
        {data.structures.nodes.map(structure => (
          <li key={structure.id}>
            <Link to={structure.fields.slug}>{structure.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
