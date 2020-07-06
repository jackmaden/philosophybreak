import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        buildTime,
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          author
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
      }

      const schemaOrgWebPage = {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        url: seo.url,
        inLanguage: 'en',
        mainEntityOfPage: seo.url,
        description: seo.description,
        name: seo.title,
        author: {
          '@type': 'Person',
          name: author,
        },
        copyrightHolder: {
          '@type': 'Person',
          name: author,
        },
        copyrightYear: '2019',
        creator: {
          '@type': 'Person',
          name: author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Philosophy Break',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/src/images/philosophybreak.png`,
          },
        },
        datePublished: '2019-01-18T10:30:00+01:00',
        dateModified: buildTime,
        image: {
          '@type': 'ImageObject',
          url: seo.image,
        },
      }

      let schemaArticle = null

      if (article) {
        schemaArticle = {
          '@context': 'http://schema.org',
          '@type': 'Article',
          author: {
            '@type': 'Person',
            name: author,
          },
          copyrightHolder: {
            '@type': 'Person',
            name: author,
          },
          copyrightYear: '2019',
          creator: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Philosophy Break',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/src/images/philosophybreak.png`,
            },
          },
          description: seo.description,
          headline: seo.title,
          inLanguage: 'en',
          url: seo.url,
          name: seo.title,
          image: {
            '@type': 'ImageObject',
            url: seo.image,
          },
          mainEntityOfPage: seo.url,
        }
      }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
            {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      buildTime
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        author
      }
    }
  }
`