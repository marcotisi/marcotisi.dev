module.exports = {
  siteMetadata: {
    avatar: "https://lh3.googleusercontent.com/a/AEdFTp7LhdsOWVhlLV5hWcxKCt0jYZj6jk9WMVkeENTt=s192-c-mo",
    title: "Marco Tisi",
    description:
      "Remote Full-Stack Engineer with experience in building eCommerce platforms, CMSs and web applications. Skilled in JavaScript (Typescript, Node.js, React, Gatsby), PHP (Laravel, Symfony) and DevOps (AWS, Docker, Terraform). Experienced in Object Oriented Programming and Functional Programming. Always enjoying learning about new technologies, frameworks and languages.",
    user: "you",
    host: "marcotisi.dev",
    siteUrl: "https://marcotisi.dev",
    author: "@tisi_marco",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "@mtdev/gatsby-theme-terminal",
      options: {
        maxWidth: "100ch",
        fontFamily:
          "source-code-pro, Monaco, Menlo, Consolas, 'Courier New', monospace",
        backgroundColor: "#1B2B34",
        textColor: "#CDD3DE",
        promptPrefixColor: "#99C794",
        promptTextColor: "#5FB3B3",
        promptSuffixColor: "#EC5f67",
        scrollbarBackgroundColor: "#4F5B66",
        scrollbarTrackBackgroundColor: "#4F5B66",
        scrollbarThumbBackgroundColor: "#A7ADBA",
      },
    },
  ],
};
