/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // siteMetadata: {
  //   title: "simply recipes",
  //   description: "nice and clean receipe site",
  //   siteUrl: "http://20.114.244.229:1337/events",
  // },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "http://20.114.244.229:1337/events",
        fetchOptions: {
          method: "GET",
        },
      },
    },

    // {
    //   resolve: "gatsby-source-custom-api",
    //   options: {
    //     url: "http://20.114.244.229:1337/events?_locale=hi-IN",
    //     fetchOptions: {
    //       method: "GET",
    //     },
    //   },
    // },

    // {
    //   resolve: "gatsby-source-custom-api",
    //   options: {
    //     url: "http://20.114.244.229:1337/events?_locale=ar-BH",
    //     fetchOptions: {
    //       method: "GET",
    //     },
    //   },
    // },

    // {
    //   resolve: "gatsby-source-custom-api",
    //   options: {
    //     url: "http://20.114.244.229:1337/events?_locale=fr-BE",
    //     fetchOptions: {
    //       method: "GET",
    //     },
    //   },
    // },

    // {
    //   resolve: "gatsby-source-multi-api",
    //   options: {
    //     apis: [
    //       {
    //         prefix: "English",
    //         baseUrl: "http://20.114.244.229:1337/events",
    //       },
    //       {
    //         prefix: "Hindi",
    //         baseUrl: "http://20.114.244.229:1337/events?_locale=hi-IN",
    //       },
    //       {
    //         prefix: "Arabic",
    //         baseUrl: "http://20.114.244.229:1337/events?_locale=ar-BH",
    //       },
    //       {
    //         prefix: "French",
    //         baseUrl: "http://20.114.244.229:1337/events?_locale=fr-BE",
    //       },
    //     ],
    //   },
    // },
  ],
}
