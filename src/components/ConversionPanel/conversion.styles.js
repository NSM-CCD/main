import styled from "styled-components"

export const ConversionPanelSection = styled.section`
  background: linear-gradient(180deg, #f9fafb 47.92%, #101828 47.93%), #fff;

  padding: 40px 24px;

  @media (min-width: 768px) {
    padding: 96px 24px;
  }

  @media (min-width: 992px) {
    padding: 96px 0;
  }

  @media (min-width: 1366px) {
    .container {
      max-width: 1170px;
      margin: 0 auto;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
  }

  img {
    max-width: 570px;
  }
`

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  background: #fff;
  box-shadow: 0 32px 64px -12px rgb(16 24 40 / 14%);
  border-radius: 12px;
  padding: 32px;

  @media (min-width: 768px) {
    padding: 40px;
    width: 500px;
    margin-left: -390px;
  }

  @media (min-width: 992px) {
    width: 570px;
    margin-left: -370px;
  }

  @media (min-width: 1200px) {
    padding: 64px;
    width: 770px;
    margin-left: -150px;
  }

  .kicker {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #5e8ab4;
  }

  .cp-title {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 38px;
    }

    @media (min-width: 992px) {
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -0.02em;
    }
  }

  p.cp-description {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #475467;
    margin: 0;
  }

  button.cp-cta {
    background: #fff;
    border: 1px solid #d0d5dd;
    box-shadow: 0 1px 2px rgb(16 24 40 / 5%);
    border-radius: 8px;
    max-width: fit-content;
    padding: 12px 20px;

    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #344054;

    &:hover {
      box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
    }
  }
`
