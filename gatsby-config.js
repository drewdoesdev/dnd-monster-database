module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "dnd-database",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "H1bJ1Qhm5c0nGF6UaqpnKr0r73igG-PVm3KDbsOq2qM",
        spaceId: "01qtuldtb10b",
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
  ],
};
