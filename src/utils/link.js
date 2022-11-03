import React from "react"
import { Link as GatsbyLink } from "gatsby"

const Link = ({
  children,
  isExternal = false,
  to,
  openInNewTab,
  className,
  ...props
}) => {
  if (!to) return <>{children}</>

  const isEmailLink = to.includes("mailto:")
  const isTelLink = to.includes("tel:")

  if (!openInNewTab && !isEmailLink && !isTelLink && !isExternal) {
    return (
      <GatsbyLink to={to} className={className} {...props}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a
      href={to}
      target={`_${openInNewTab ? "blank" : "self"}`}
      rel="noopener noreferrer"
      className={className}
      aria-label={to}
    >
      {children}
    </a>
  )
}

export default Link
