import React from "react"

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <script
      src="https://cdn-us.clickdimensions.com/web/v10/cdform.jquery.js"
      type="text/javascript"
    />,
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5ZCKKD');`,
      }}
    />,
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `clickd_jquery = jQuery.noConflict(true);`,
      }}
      defer
    />,
    <script
      src="https://cdn-us.clickdimensions.com/web/v10/cdform.min.noanalytics.js"
      type="text/javascript"
    />,
    <script
      src="https://cdn-us.clickdimensions.com/web/v10/xsscheck.js"
      type="text/javascript"
    />,
    <script id="customjs" type="text/javascript" />,
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          var optOut = true;
          var optOutHostId = 'a3um9k34VbEO6VAHukn6t6';
        `,
      }}
    />,
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js" />,
  ])

  setPostBodyComponents([
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-5ZCKKD"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>,
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
        function onDocumentReady() {
          clickd_pageType = 'Form';
          clickd_handlersLocation = "https://analytics.clickdimensions.com";
          clickd_directory = "https://cdn-us.clickdimensions.com/web/v10";
        }
        
        clickd_jquery(function() {
          console.log('success!')
          onDocumentReady()
        })
      `,
      }}
    />,
    <script
      type="text/javascript"
      src="https://analytics.clickdimensions.com/ts.js"
    />,
    <script
      type="text/javascript"
      src="https://analytics.clickdimensions.com/optout.js"
    />,
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `cdDomainKey = 'db1dfe00705fed119562000d3a9bc7ff';
        cdPageKey = '654d437f705fed119562000d3a9bc7ff';`,
      }}
    />,
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `var cdAnalytics = new clickdimensions.Analytics('analytics.clickdimensions.com');
        cdAnalytics.setDomain('acccalculatormain-refactorcalc.gatsbyjs.io');
        cdAnalytics.setAccountKey('ayxPofCEvkuQt4gtmoabMQ');
        cdAnalytics.setScore(typeof(cdScore) == "undefined" ? 0 : (cdScore == 0 ? null : cdScore));
        
        cdAnalytics.trackPage();
        cdAnalytics.optOutTracking(typeof(optOut) != "undefined" && optOut);`,
      }}
    />,
  ])
}
