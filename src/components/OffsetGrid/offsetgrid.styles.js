import styled from "styled-components"

export const OffsetGridSection = styled.section`
  background-color: #fff;

  .container {
    @media (min-width: 1366px) {
      max-width: 1170px;
      margin: 0 auto;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
  padding: 40px 24px;

  @media (min-width: 768px) {
    padding: 80px 0;
  }

  @media (min-width: 992px) {
    padding: 96px 0;
    flex-direction: row;
  }
`

export const HeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 992px) {
    max-width: 500px;
  }

  span.kicker {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #5e8ab4;
  }

  .description {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #475467;
    margin: 0;
  }

  .heading {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
    margin: 0;

    span {
      color: #5e8ab4;
    }

    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -0.02em;
    }

    @media (min-width: 992px) {
      font-size: 48px;
      line-height: 60px;
    }
  }
`

export const GridBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (min-width: 768px) {
      flex: 0 50%;
      max-width: 345px;
    }

    @media (min-width: 992px) {
      max-width: 190px;
    }

    @media (min-width: 1200px) {
      max-width: 270px;
    }

    .check-icon {
      width: 100%;
      max-width: 32px;
      margin-bottom: 20px;
    }

    .grid-title {
      font-family: "Raleway", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #101828;
      margin: 0;
    }

    .grid-description {
      font-family: "Raleway", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #475467;
      margin: 0;
    }
  }
`
