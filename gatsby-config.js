/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  plugins: ['gatsby-plugin-netlify-cms', `gatsby-plugin-image`, {
    resolve: 'gatsby-source-filesystem',
    options:{
      name: 'image',
      path: `${__dirname}/src/images`
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options:{
      name: 'navigation',
      path: `${__dirname}/content`
    }
  },
  {
    resolve: 'gatsby-transformer-remark',
    options:{ }
  }
],
}

