/* eslint-disable react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import Counter from './counter';
import Layout from '../layouts';

export default function Home({ data }) {
  return (
    <div>
      <Layout>
        <h1>
          {' '}
          {data.site.siteMetadata.title}
        </h1>
        <p>
          Its me!
          {' '}
          {data.site.siteMetadata.author}
        </p>

        <Link
          to="/page-2/"
        >
          Page 2
        </Link>

        <Link to="/dir1/page-3">
          Page 3
        </Link>
        <br />
        <Link to="/counter">
          Counter
        </Link>
        <Counter />
      </Layout>
    </div>
  );
}

export const query = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
