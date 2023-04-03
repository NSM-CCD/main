require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `American Collectors Pricing Tool`,
    description: `How much is your classic car worth? Use American Collectors Insurance’s multi-source classic car valuation tool to more accurately determine a vehicle's value.`,
    author: `Webstacks dev`,
    image: "/images/opengraph.png",
    url: "https://classiccarvalue.com",
    siteUrl: "https://classiccarvalue.com",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://classiccarvalue.com/",
        sitemap: "https://classiccarvalue.com/sitemap-index.xml",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `american-car-collectors-quote-tool`,
        short_name: `acc-quote-tool`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/acc-calculator-logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: "https://graphql-prod.classic.com",
        headers: {
          Authorization:
            `License ${process.env.GATSBY_CLASSIC_API_KEY}`,
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
  ],
}
