/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({
  title = "",
  noindex = false,
  meta = [],
  keywords = [],
  description = "",
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const metaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: `${title} - American Collectors Pricing Tool`,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: `${site.siteMetadata.image}`,
    },
    {
      property: `og:url`,
      content: `${site.siteMetadata.url}`,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: `${title} - American Collectors Pricing Tool`,
    },
    {
      property: `twitter:image`,
      content: `${site.siteMetadata.image}`,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]
    .concat(
      keywords.length > 0
        ? {
            name: `keywords`,
            content: keywords.join(`, `),
          }
        : []
    )
    .concat(meta)

  return (
    <>
      <title>
        {title
          ? `${title} - American Collectors Pricing Tool`
          : "American Collectors Pricing Tool"}
      </title>
      {metaTags.length &&
        metaTags.map((m, i) => {
          return <meta key={`${m.content}-${i}`} {...m} />
        })}
      <meta id="robots" name="robots" content={noindex ? "noindex" : "index"} />
    </>
  )
}

export default Seo
