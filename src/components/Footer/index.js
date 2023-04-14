import React from "react"
import { Link } from "gatsby"
import footerLogo from "../../images/footer-logo.svg"
import {
  Content,
  Copyright,
  FooterBottom,
  FooterLinks,
  FooterMain,
  Menus,
  PrivacyTerms,
} from "./footer.styles"

const Footer = () => (
  <FooterMain>
    <div className="container p-0">
      <Content>
        <FooterLinks>
          <Link to="/" className="footer-logo">
            <img src={footerLogo} alt="Footer logo" />
          </Link>

          <Menus>
            <div className="footer-menu">
              <p className="menu-title">Partners</p>
              <a
                href="https://www.classic.com/"
                target="_blank"
                rel="noreferrer"
              >
                Classic.com
              </a>
              <a
                href="https://classiccars.com/"
                target="_blank"
                rel="noreferrer"
              >
                Classiccars.com
              </a>
              <a
                href="https://www.hemmings.com/"
                target="_blank"
                rel="noreferrer"
              >
                Hemmings
              </a>
              <a
                href="https://classics.autotrader.com/"
                target="_blank"
                rel="noreferrer"
              >
                Auto Trader - Classics
              </a>
              <a
                href="https://www.ebay.com/n/all-categories#ebay-motors"
                target="_blank"
                rel="noreferrer"
              >
                eBay Motors
              </a>
            </div>

            <div className="footer-menu">
              <p className="menu-title">Helpful Links</p>
              <a
                href="https://secure.americancollectors.com/Home/QuoteSelector?from=root"
                target="_blank"
                rel="noreferrer"
              >
                Get an Insurance Quote
              </a>
              <a
                href="https://americancollectors.com/community/"
                target="_blank"
                rel="noreferrer"
              >
                Collector’s Community
              </a>
              <a
                href="https://americancollectors.com/insurance/"
                target="_blank"
                rel="noreferrer"
              >
                Collector Insurance
              </a>
              <a
                href="https://americancollectors.com/insurance/collector-car-insurance-eligibility/"
                target="_blank"
                rel="noreferrer"
              >
                Collector Car Insurance Eligibility
              </a>
              <a
                href="https://americancollectors.com/resources/"
                target="_blank"
                rel="noreferrer"
              >
                Other Resources
              </a>
            </div>
          </Menus>
        </FooterLinks>
        <hr />
        <FooterBottom>
          <Copyright>
            Classic Car Value Scout and ClassicCarValue.com ©2023 American
            Collectors Insurance. All Rights Reserved.
          </Copyright>
          <PrivacyTerms>
            <a
              href="https://americancollectors.com/privacy-policy/"
              className="privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </a>
            <a
              href="https://americancollectors.com/terms-of-use/"
              className="terms-conditions"
              target="_blank"
            >
              Terms & Conditions
            </a>
          </PrivacyTerms>
        </FooterBottom>
      </Content>
    </div>
  </FooterMain>
)

export default Footer
