module.exports = {
    trailingSlash: `always`,
    siteMetadata: {
        title: 'Philosophy Break',
        titleTemplate: "%s | Philosophy Break",
        description: 'Philosophy Break is a social enterprise dedicated to getting more people engaged with philosophy.',
        url: 'https://philosophybreak.com',
        siteUrl: 'https://philosophybreak.com',
        image: '/philosophy--break.png',
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
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                excludes: [`/thank-you`, `/thank-you-lifes-big-questions`, `/thank-you-introduction-to-nietzsche`, `/thank-you-philosophies-for-living`, `/privacy-policy`, `/cookie-policy`, `/amazon-affiliate`]
            }
        },
        //rss feed
        {
            resolve: 'gatsby-plugin-feed',
            options: {
                query: `
                    {
                        site {
                            siteMetadata {
                                title
                                description
                                siteUrl
                                site_url: siteUrl
                            }
                        }
                    }
                `,
                feeds: [
                    {
                      serialize: ({ query: { site, allMarkdownRemark } }) => {
                        return allMarkdownRemark.nodes.map(node => {
                          return Object.assign({}, node.frontmatter, {
                            description: node.frontmatter.description,
                            date: node.frontmatter.date,
                            url: site.siteMetadata.siteUrl + node.fields.slug,
                            guid: site.siteMetadata.siteUrl + node.fields.slug,
                            author: node.frontmatter.author,
                            enclosure: {
                                'url': site.siteMetadata.siteUrl + node.frontmatter.imageSeo.publicURL,
                            },
                            categories: ['Philosophy'],
                          })
                        })
                      },
                      query: `
                      {
                        allMarkdownRemark(
                          sort: { order: DESC, fields: [frontmatter___date] },
                        ) {
                          nodes {
                            html
                            fields { 
                              slug 
                            }
                            frontmatter {
                              title
                              date
                              description
                              author
                              tags
                              imageSeo {
                                publicURL
                              }
                            }
                          }
                        }
                      }
                    `,
                      output: "/rss.xml",
                      title: "Latest Breaks RSS Feed | Philosophy Break",
                      description: "Short articles on philosophy's biggest ideas. Each break takes only a few minutes to read, and is crafted to expand your mind and spark your curiosity.",
                      language: 'en',
                      match: "^/articles/",
                    },
                ],
            },
        },
        //robots.txt
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
              sitemap: 'https://philosophybreak.com/sitemap/sitemap-0.xml',
              policy: [{ userAgent: '*', disallow: '' }]
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
        //preact REMOVING COS IT CAUSES BUILD ISSUES (NOT DEV ISSUES - BUILD ISSUES) `gatsby-plugin-preact`,
        
        //catch all internal links & transform to Gatsby Link
        `gatsby-plugin-catch-links`,
        //gatsby images
        `gatsby-plugin-image`,
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
              include_favicon: false, //it was generating a 32x32 default favicon, when google requires a 48x48. Disabling the 32x32 should enable google to pick up the 48x48 via the apple-touch-icon
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
                          quality: 80,
                          withWebp: true,
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
                `react-anchor-link-smooth-scroll`
              ]
            }
        },
        //offline functionality - place at end
        `gatsby-plugin-offline`
    ]
}