module.exports = {
    siteMetadata: {
        title: 'Philosophy Break',
        titleTemplate: "%s | Philosophy Break",
        description: 'Philosophy Break is a clearing in your cluttered newsfeed.',
        url: 'https://philosophybreak.com',
        siteUrl: 'https://philosophybreak.com',
        image: '/philosophy-break.jpeg',
        author: 'Jack Maden'
    },
    plugins: [
        //header & canonical seo
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-react-helmet-canonical-urls`,
            options: {
              siteUrl: `https://philosophybreak.com`,
            },
        },
        //sitemap
        `gatsby-plugin-sitemap`,
        //robots.txt
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
              policy: [{ userAgent: '*', disallow: '/thank' }]
            }
        },
        //html lang
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
              lang: 'en'
            }
        },
        //google tag manager
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
              id: "GTM-NVRNWFT",
            }
        },
        //catch all internal links & transform to Gatsby Link
        `gatsby-plugin-catch-links`,
        //gatsby images
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        {
            //pointing to where markdown files live
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            //pointing to where images live
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        //pwa gatsby plugin
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "Philosophy Break",
              short_name: "Philosophy Break",
              start_url: "/",
              background_color: "#000",
              theme_color: "#fff",
              // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
              // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
              display: "standalone",
              icon: "src/images/philosophybreak.png", 
            },
        },
        //process md files        
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        //images in markdown
                        resolve: `gatsby-remark-images`,
                        options: {
                          maxWidth: 600,
                          showCaptions: true,
                          linkImagesToOriginal: false,
                          wrapperStyle: `margin: 2.2em 0 2em;`
                        }
                    },
                    {
                        //add target _blank & rel no follow to external links https://www.gatsbyjs.org/packages/gatsby-remark-external-links/ (using defaults)
                        resolve: `gatsby-remark-external-links`,
                        options: {
                            target: `_blank`,
                            rel: `noopener noreferrer`
                        }
                    }
                ]
            }
        },
        //polyfill
        {
            resolve: `gatsby-plugin-compile-es6-packages`,
            options: {
              modules: [
                `react-spring`, 
                `react-anchor-link-smooth-scroll`
              ]
            }
        },
        //offline functionality - place at end
        `gatsby-plugin-offline`
    ]
}