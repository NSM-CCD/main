module.exports = {
  siteMetadata: {
    title: `American collectors`,
    description: `American collectors - Classic Car Calculator.`,
    author: `@r-ichard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/acc-calculator-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: "https://graphql-prod.classic.com",
        headers: {
          Authorization:
            "License aC9tZXRacS8wZ25VbldvVnNycVNHa2ZhZ3JEVnl3dk1PTE1QbmdaMEdQcz0=", // @TODO move to env variable
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
  ],
}
