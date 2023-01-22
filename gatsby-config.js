module.exports = {
  siteMetadata: {
    avatar: "https://lh3.googleusercontent.com/a/AEdFTp7LhdsOWVhlLV5hWcxKCt0jYZj6jk9WMVkeENTt=s192-c-mo",
    title: "Marco Tisi",
    description:
      "Full Stack Engineer with 19 years of experience building web applications, eCommerce platforms, and CMSs. Skilled in JavaScript (Typescript, Node, React, VueJs), PHP (Laravel, Symfony), and DevOps (AWS, Docker, Terraform). Experienced in Object-Oriented Programming and Functional Programming.",
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
        name: "Marco Tisi - Full Stack Engineer",
        short_name: "Marco Tisi",
        start_url: "https://marcotisi.dev",
        background_color: "#1B2B34",
        theme_color: "#CDD3DE",
        display: "standalone",
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
