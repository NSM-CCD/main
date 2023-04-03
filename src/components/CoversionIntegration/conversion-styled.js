import styled from "styled-components"

export const CISection = styled.section`
  padding: 24px;

  background-color: #101828;

  .integration-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;

    background-color: #1d2939;
    border-radius: 12px;

    padding: 24px;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;

      padding: 40px;
    }

    .cp-integration-heading {
      .heading {
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #fff;

        @media (min-width: 768px) {
          font-size: 24px;
          line-height: 32px;
        }
      }
    }

    .cta-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;

      max-width: 529px;

      .subtitle {
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #eaecf0;
      }

      .integration-link {
        display: flex;
        align-items: center;
        gap: 12px;

        background-color: transparent;
        border: none;

        text-decoration: none;
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: #76a5c9;
      }
    }
  }

  .container {
    @media (min-width: 1200px) {
      max-width: 1170px;
      margin: 0 auto;
    }
  }
`
