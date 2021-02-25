import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const Header: React.FC = () => {
  const data = useStaticQuery<{
    site: {
      siteMetadata: {
        title?: string;
        description?: string;
      };
    };
  }>(graphql`
    query Header {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  if (
    !data?.site?.siteMetadata?.title &&
    !data?.site?.siteMetadata?.description
  ) {
    return null;
  }

  return (
    <header>
      {data.site?.siteMetadata?.title && (
        <h1>{data.site.siteMetadata.title}</h1>
      )}
      {data.site?.siteMetadata?.description && (
        <p>{data.site.siteMetadata.description}</p>
      )}
    </header>
  );
};
