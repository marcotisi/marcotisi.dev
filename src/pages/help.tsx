import { graphql, PageProps } from "gatsby";
import React from "react";

import { Layout } from "../components";

export const query = graphql`
  query Help {
    allMarkdownRemark {
      nodes {
        frontmatter {
          help
          command
        }
      }
    }
  }
`;

export const Help: React.FC<
  PageProps<{
    allMarkdownRemark: {
      nodes: Array<{
        frontmatter: {
          help: string;
          command: string;
        };
      }>;
    };
  }>
> = ({ data }) => (
  <Layout>
    <div>help - show this message</div>
    <div>clear - clear the console</div>
    {data.allMarkdownRemark.nodes.map(
      ({ frontmatter: { command, help } }, index) => (
        <div key={`help-${index}`}>
          {command} - {help}
        </div>
      ),
    )}
  </Layout>
);

export default Help;
