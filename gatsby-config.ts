export const siteMetadata = {
  title: "Marco Tisi",
  description:
    "Remote Full-Stack Engineer with experience in building e-commerce platforms, CMS and web applications. Skilled in PHP (Laravel, Symfony), JavaScript (Typescript, Node.js, React, VueJs) and DevOps (AWS, Docker, Terraform). Experienced in Object Oriented programming and Functional Programming. Always enjoying learning about new technologies, frameworks and languages. Passionate about photography, travels and surf.",
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
