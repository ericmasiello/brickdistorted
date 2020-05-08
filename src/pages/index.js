import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Theme from '../theme';
import SEO from '../components/seo';

function binarySearch(value, list, getValue) {
  let first = 0; // left endpoint
  let last = list.length - 1; // right endpoint
  let position = -1;
  let found = false;
  let middle;

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (getValue(list[middle]) === value) {
      found = true;
      position = middle;
    } else if (getValue(list[middle]) > value) {
      //if in lower half
      last = middle - 1;
    } else {
      //in in upper half
      first = middle + 1;
    }
  }
  return position;
}

function mergeContentWithCoverImages(structureNodes, coverImageNodes) {
  return structureNodes.nodes.map(structureNode => {
    const {
      coverImage: coverImageMeta = {},
      ...remainingFrontmatter
    } = structureNode?.frontmatter;
    const coverImageAlt = coverImageMeta?.alt;
    const coverImageSrc = coverImageMeta?.src?.name;
    const matchingNodePosition = binarySearch(
      coverImageSrc,
      coverImageNodes.nodes,
      imageNode => {
        return imageNode.fluid.originalName.replace(/\.(jpg|png|jpeg)$/g, '');
      }
    );
    return {
      id: structureNode.id,
      ...remainingFrontmatter,
      coverImage: {
        ...coverImageNodes.nodes[matchingNodePosition],
        alt: coverImageAlt,
      },
    };
  });
}

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
      coverImages: allImageSharp(
        sort: { fields: fluid___originalName, order: ASC }
      ) {
        nodes {
          fluid(quality: 85) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const items = mergeContentWithCoverImages(data.structures, data.coverImages);
  console.log({ items });

  return (
    <Theme>
      <SEO title="Home" />
      <section className="portfolio-area section-py bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="fitRows-grid" className="portfolio-item column-2 style2">
                {items.map(item => (
                  <div className="grid-item w-50 px-15 mb-30" key={item.id}>
                    <div className="single-portfolio position-relative text-center">
                      <img
                        src={item.coverImage.fluid.src}
                        alt={item.coverImage?.alt}
                      />
                      <div className="portfolio-title bg-white rgb-85 d-flex flex-column justify-content-center">
                        <a href="details-2.html">
                          <h3>{item.title}</h3>
                        </a>
                        <h5>Branding</h5>
                        <a href="details-2.html">
                          <i className="ti-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-60">
                <a href="#" className="btn btn-default btn-outline-dark">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Theme>
  );
};

export default IndexPage;
