import { graphql, PageProps } from "gatsby";
import React from "react";

import { Layout } from "../components";

export const query = graphql`
  query($command: String!) {
    markdownRemark(frontmatter: { command: { eq: $command } }) {
      html
      frontmatter {
        title
        help
      }
    }
  }
`;

export const Command: React.FC<
  PageProps<{
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        help: string;
      };
    };
  }>
> = ({ data }) => (
  <Layout>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
);

export default Command;
