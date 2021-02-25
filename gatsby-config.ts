export const siteMetadata = {
  title: "Marco Tisi",
  description:
    "Remote Full-Stack Engineer with experience in building eCommerce platforms, CMSs and web applications. Skilled in JavaScript (Typescript, Node.js, React, Gatsby), PHP (Laravel, Symfony) and DevOps (AWS, Docker, Terraform). Experienced in Object Oriented Programming and Functional Programming. Always enjoying learning about new technologies, frameworks and languages.",
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
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "commands",
      path: `${__dirname}/src/commands`,
    },
  },
  "gatsby-transformer-remark",
];
