import styled from "styled-components"

export const FooterMain = styled.footer`
  background-color: #101828;

  @media (min-width: 1366px) {
    .container {
      max-width: 1170px;
      margin: 0 auto;
    }
  }
`

export const Content = styled.div`
  padding: 40px 24px;

  @media (min-width: 768px) {
    padding: 96px 0 56px;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-bottom: 72px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-logo {
    max-width: fit-content;
    align-self: flex-start;
  }
`

export const Menus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }

  .footer-menu {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .menu-title {
      font-family: "Raleway", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #98a2b3;
      margin: 0;
    }

    a {
      font-family: "Raleway", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #fff;
      text-decoration: none;

      min-width: 270px;

      @media (min-width: 768px) {
        min-width: 180px;
      }

      @media (min-width: 992px) {
        min-width: 270px;
      }
    }
  }
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Copyright = styled.p`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  color: #98a2b3;
  margin: 0;
`

export const PrivacyTerms = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  .privacy-policy,
  .terms-conditions {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;
    color: #98a2b3;
    text-decoration: none;
  }
`
