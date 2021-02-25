import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;
  const template = require.resolve("./src/templates/command.tsx");
  const result = await graphql<{
    allMarkdownRemark: {
      edges: Array<{
        node: {
          frontmatter: {
            command: string;
          };
        };
      }>;
    };
  }>(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              command
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.command,
      component: template,
      context: {
        command: node.frontmatter.command,
      },
    });
  });
};
