import React from "react"

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([])

  setPostBodyComponents([
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-5ZCKKD"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>,
  ])
}
