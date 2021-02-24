export const siteMetadata = {
  title: "marcotisi.dev",
  siteUrl: "https://marcotisi.dev",
};

export const plugins = [
  "gatsby-plugin-sass",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap",
  "gatsby-plugin-offline",
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      icon: "src/images/icon.png",
    },
  },
];
