import styled from "styled-components"

export const ResultsWrapper = styled.div`
  background: linear-gradient(180deg, #f1f5f8 0%, #f9fafb 100%);
  padding: 56px 96px 0;

  .results-container {
    position: relative;
    display: flex;
    gap: 32px;

    .sidebar-items {
      position: sticky;
      display: flex;
      flex-direction: column;
      flex: 0 30%;

      a {
        border-radius: 6px;
        text-decoration: none;
        margin: 0;
        padding: 8px 12px;

        font-family: "Raleway", sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #667085;

        &.active {
          background-color: #9bb8d3;
          color: #fff;
        }
      }
    }

    .content-wrapper {
      .valuation-heading {
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: -0.02em;
        color: #163750;
        margin-bottom: 40px;
      }

      .model-overview {
        margin-top: 32px;
        padding: 48px;
        border-radius: 12px;
        background-color: #fff;

        display: flex;
        flex-direction: column;
        gap: 32px;

        .model-overview-title {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 30px;
          line-height: 38px;
          color: #163750;
        }

        .description {
          display: flex;
          flex-direction: column;
          gap: 16px;

          .subtitle {
            font-family: "Raleway", sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            color: #163750;
          }

          .overview-content {
            font-family: "Raleway", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #475467;
          }
        }
      }

      .chart-wrapper {
        padding: 48px;
        background-color: #fff;
        border-radius: 12px;
      }

      .sales-history {
        margin-top: 32px;
        padding: 48px;
        background-color: #fff;
        border-radius: 12px;
      }

      .back-share {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;

        button {
          display: flex;
          gap: 8px;
          vertical-align: middle;
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #5379a2;

          &.btn-share {
            background: #e7f2f7;
            border: 1px solid #e7f2f7;
            box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
            border-radius: 8px;
          }
        }
      }
    }
  }
`
