import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import DebugJSON from '../components/DebugJSON';
import Theme from '../theme';

function DetailPage(props) {
  const {
    structure: { frontmatter: content },
    images,
  } = props.data;

  return (
    <Theme>
      <SEO title={content.title} />
      <h1>{content.title}</h1>
      {images.nodes.map(image => (
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
          </div>
        </div>
      ))}
    </Theme>
  );
}

export default DetailPage;

export const query = graphql`
  query StructureQuery($slug: String!, $regexSlug: String!) {
    structure: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        slug
      }
    }
    images: allCloudinaryMedia(filter: { tags: { regex: $regexSlug } }) {
      nodes {
        secure_url
        public_id
        tags
        width
        height
      }
    }
  }
`;
