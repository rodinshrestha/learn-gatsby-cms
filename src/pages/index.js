import { Link, graphql } from "gatsby";
import * as React from "react";

import '../style/style.css'

export default function Home({ data }) {
  return (
    <div>
      <h1>Netlify CMS Navigation</h1>

      <div>
        <ul className="navigation-wrapper">
          {data.navigation.nodes.map(({ frontmatter }) => {
            return (
              <li className="link-item">
                <Link to={frontmatter.link}> {frontmatter.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    navigation: allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          link
        }
      }
    }
  }
`;
