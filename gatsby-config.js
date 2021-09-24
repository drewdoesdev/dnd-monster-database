module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "dnd-database",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "CFPAT-hWO6GLNYME9m2CZksdEwmLJlDUyykktybzsegTzX-eo",
        spaceId: "01qtuldtb10b",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
  ],
};
