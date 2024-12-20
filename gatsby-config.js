/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `landing-pages`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-css-modules",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
    },
    __key: "pages"
  }]
};