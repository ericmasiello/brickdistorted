import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Theme from "../theme"
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
  `)

  return (
    <Theme>
      <SEO title="Home" />
      <section class="portfolio-area section-py bg-white">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div id="fitRows-grid" class="portfolio-item column-2 style2">
                {/* Start loop here */}
                <div class="grid-item w-50 px-15 mb-30">
                  <div class="single-portfolio position-relative text-center">
                    <img src="../assets/img/portfolio/grid/2-1.jpg" alt="Thumbnail" />
                    <div class="portfolio-title bg-white rgb-85 d-flex flex-column justify-content-center">
                      <a href="details-2.html"><h3>Business card</h3></a>
                      <h5>Branding</h5>
                      <a href="details-2.html"><i class="ti-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                {/* End loop here */}
              </div>
              <div class="text-center mt-60">
                <a href="#" class="btn btn-default btn-outline-dark">Load More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Theme>
  )
}

export default IndexPage
