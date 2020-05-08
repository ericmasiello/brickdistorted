import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Theme from '../theme';

function DetailPage(props) {
  const {
    structure: { frontmatter: content },
    coverImage,
  } = props.data;

  return (
    <Theme>
      <SEO title={content.title} />
      <h1>{content.title}</h1>
      <Img sizes={coverImage.sizes} alt="FIXME" />
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </Theme>
  );
}

export default DetailPage;

export const query = graphql`
  query StructureQuery($slug: String!, $coverImage: String!) {
    structure: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
      }
    }

    coverImage: imageSharp(sizes: { originalName: { eq: $coverImage } }) {
      id
      original {
        src
      }
      sizes(quality: 85) {
        originalName
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
