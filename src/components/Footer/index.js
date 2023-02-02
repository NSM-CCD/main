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
              <a href="#">Classic.com</a>
              <a href="#">Classiccars.com</a>
              <a href="#">Hemmings</a>
              <a href="#">Auto Trader - Classics</a>
              <a href="#">eBay Motors</a>
            </div>

            <div className="footer-menu">
              <p className="menu-title">Helpful Links</p>
              <a href="#">Get a Quote</a>
              <a href="#">ACI Blog</a>
              <a href="#">Insurance Policies</a>
            </div>
          </Menus>
        </FooterLinks>
        <hr />
        <FooterBottom>
          <Copyright>Classic Car Value 2023</Copyright>
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
