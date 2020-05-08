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

function deriveFromTagPrefix(prefix) {
  return tags => {
    const tag = (tags || []).find(tag => tag.startsWith(prefix));
    if (!tag) {
      return '';
    }

    return tag.replace(prefix, '').trim();
  };
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      cloudinaryCoverImages: allCloudinaryMedia(
        filter: { tags: { in: "coverphoto" } }
      ) {
        totalCount
        nodes {
          secure_url
          public_id
          tags
          width
          height
        }
      }
    }
  `);

  // const items = mergeContentWithCoverImages(data.structures, data.coverImages);
  // console.log({ items });

  console.log(data.cloudinaryCoverImages.nodes);

  const findTitleFromTag = deriveFromTagPrefix('title:');
  const findSlugFromTag = deriveFromTagPrefix('slug:');

  return (
    <Theme>
      <SEO title="Home" />
      <section className="portfolio-area section-py bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                id="fitRows-grid"
                className="portfolio-item column-2 style2"
                style={{
                  display: 'grid',
                  'grid-template-columns':
                    'repeat( auto-fit, minmax(50%, 1fr) )',
                  'grid-auto-rows': 'minmax(300px, 60vh)',
                }}
              >
                {data.cloudinaryCoverImages.nodes.map(image => (
                  <div className="grid-item px-15 mb-30" key={image.secure_url}>
                    <div
                      className="single-portfolio position-relative text-center"
                      style={{ height: '100%' }}
                    >
                      <img
                        src={image.secure_url}
                        alt=""
                        style={{
                          height: '100%',
                          'object-fit': 'cover',
                          'object-position': 'center',
                        }}
                      />
                      <div className="portfolio-title bg-white rgb-85 d-flex flex-column justify-content-center">
                        <Link to={findSlugFromTag(image.tags)}>
                          <h3>{findTitleFromTag(image.tags)}</h3>
                        </Link>
                        <h5>See More</h5>
                        <Link to={findSlugFromTag(image.tags)}>
                          <i className="ti-arrow-right" />
                        </Link>
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
