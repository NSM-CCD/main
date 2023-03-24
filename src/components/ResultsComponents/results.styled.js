import styled from "styled-components"

export const ResultsWrapper = styled.div`
  background: linear-gradient(180deg, #f1f5f8 0%, #f9fafb 100%);
  padding: 40px 12px 0;

  @media (min-width: 768px) {
    padding: 56px 96px 0;
  }

  & .container.results-container {
    @media (min-width: 1366px) {
      max-width: 1170px;
      margin: 0 auto;
    }
  }

  .results-container {
    position: relative;
    display: flex;
    gap: 32px;

    .sidebar-items {
      position: sticky;
      top: 89px;
      align-self: flex-start;
      display: none;
      flex-direction: column;
      flex: 0 30%;

      @media (min-width: 992px) {
        display: flex;
      }

      & .side-item {
        text-decoration: none;
        border-radius: 6px;
        margin: 0;
        padding: 8px 12px;
        text-align: left;
        cursor: pointer;

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

      & .beta-text {
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.235em;
        color: #98a2b3;
        padding: 8px 12px;
      }
    }

    .content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 100%;

      .valuation-heading {
        display: flex;
        align-items: flex-end;
        gap: 12px;

        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: -0.02em;
        color: #163750;

        h2.car-name {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 28px;
          color: #163750;

          @media (min-width: 768px) {
            font-size: 36px;
            line-height: 44px;
          }
        }

        p.model {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #475467;

          @media (min-width: 768px) {
            font-size: 20px;
            line-height: 30px;
          }
        }
      }

      .features-block {
        background: #f1f8fc;
        border: 1px solid #c5deec;
        border-radius: 12px;
        padding: 24px;

        display: flex;
        flex-direction: column;
        gap: 16px;

        @media (min-width: 564px) {
          padding: 48px;
        }

        .features-collapse {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
        }

        .features-collapse-button {
          background-color: transparent;
          border: none;
          width: 24px;
          height: 24px;

          svg {
            transform: rotate(-360deg);
            transition: transform 250ms;
          }

          &.active {
            svg {
              transform: rotate(-180deg);
            }
          }
        }

        .features-title {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 28px;
          color: #3a576f;

          margin: 0;
        }

        .items-wrapper {
          display: flex;
          flex-flow: row wrap;
          gap: 16px;
          justify-content: space-between;

          .features-items {
            display: flex;
            justify-content: space-between;
            flex: 0 100%;
            padding: 16px;
            cursor: pointer;

            background: #fff;
            border: 1px solid #eaecf0;
            border-radius: 8px;

            width: 100%;

            @media (min-width: 768px) {
              flex: 0 48%;
              max-width: 437px;
            }

            &.active {
              background: #e7f2f7;
            }

            .item-title {
              margin: 0;
              font-family: "Raleway", sans-serif;
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              line-height: 24px;
              color: #3a576f;

              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 305px;
            }

            .item-description {
              font-family: "Raleway", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 20px;
              color: #32648d;
            }
          }
        }
      }

      .model-overview {
        border-radius: 12px;
        background-color: #fff;

        display: flex;
        flex-direction: column;
        gap: 32px;
        padding: 24px;

        @media (min-width: 768px) {
          padding: 48px;
        }

        .model-collapse {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
        }

        .model-collapse-button {
          background-color: white;
          border: none;

          width: 24px;
          height: 24px;

          svg {
            transform: rotate(-360deg);
            transition: transform 250ms;
          }

          &.active {
            svg {
              transform: rotate(-180deg);
            }
          }
        }

        .model-overview-title {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 38px;
          color: #163750;

          margin: 0;

          @media (min-width: 768px) {
            font-size: 30px;
          }
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
        background-color: #fff;
        border-radius: 12px;
        padding: 24px;

        @media (min-width: 768px) {
          padding: 48px;
        }
      }

      .switch-buttons {
        .btn-switch {
          border-width: 1px 1px 0 1px;
          border-style: solid;
          border-radius: 6px 6px 0 0;
          background-color: #5b89b4;
          border-color: #99bbda;

          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          padding: 8px 16px;
          color: #fff;
          max-height: 36px;

          &.active {
            background: #236092;
            border: 1px solid #236092;
          }
        }
      }

      .price {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .avg-title {
          font-family: "Raleway", sans-serif;
          font-weight: 600;
          font-size: 20px;
          color: #163750;
        }

        .avg-collapse {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-direction: row;
        }

        .avg-header {
          display: flex;
          flex-direction: column;
        }

        .avg-value {
          font-family: "Raleway", sans-serif;
          font-weight: 600;
          font-size: 36px;
          line-height: 44px;
          color: #163750;
          margin-bottom: 0;
        }
      }

      .avg-collapse-button {
        align-self: start;
        border: none;
        background-color: #fff;

        width: 24px;
        height: 24px;

        svg {
          transform: rotate(-360deg);
          transition: transform 250ms;
        }

        &.active {
          svg {
            transform: rotate(-180deg);
          }
        }
      }

      .display-none {
        display: none;
      }

      .h-divider {
        border-bottom: 1.5px solid #f2f4f7;
      }

      .sales-title {
        font-family: "Raleway", sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: #163750;

        padding-bottom: 23px;
      }

      .sales-history-chart-separator {
        padding-bottom: 64px;
      }

      .sales-history {
        display: flex;
        flex-direction: column;
        gap: 32px;

        background-color: #fff;
        border-radius: 0 12px 12px 12px;
        padding: 24px;

        @media (min-width: 768px) {
          padding: 48px;
        }

        .sales-history-title {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 30px;
          line-height: 38px;
          color: #163750;
        }
      }

      .valuation-chart {
        border-radius: 12px;
        padding: 24px;

        @media (min-width: 768px) {
          padding: 48px;
        }
      }

      .restart-calc {
        display: flex;
        align-items: center;
        justify-content: space-between;

        text-decoration: none;

        @media (min-width: 768px) {
          gap: 12px;
          justify-content: flex-start;
        }

        span {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 28px;
          color: #667085;
          width: fit-content;
        }
      }

      .price-chart {
        background-color: #fff;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        padding: 24px;

        @media (min-width: 768px) {
          padding: 48px;
        }

        .price-chart-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .price-chart-title {
            font-family: "Raleway", sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 38px;
            color: #163750;
            margin: 0;

            @media (min-width: 768px) {
              font-size: 30px;
            }
          }

          .price-chart-button {
            border: none;
            background-color: #fff;

            width: 24px;
            height: 24px;

            svg {
              transform: rotate(-360deg);
              transition: transform 250ms;
            }

            &.active {
              svg {
                transform: rotate(-180deg);
              }
            }
          }
        }

        .price-chart-container {
          @media (min-width: 768px) {
            padding-top: 32px;
          }
          display: flex;
          flex-wrap: wrap;
        }

        .price-chart-body {
          border-radius: 12px;
          background-color: #f9fafb;
          width: 100%;
          height: 128px;
        }

        .price-chart-container > * {
          flex-basis: calc(
            50% - 10px
          ); /* adjust the width based on your needs */
          margin-right: 20px;
          margin-bottom: 20px;
        }

        .price-chart-container > *:last-child {
          margin-right: 0;
        }
      }

      .related-vehicles {
        background-color: #fff;
        border-radius: 12px;

        display: flex;
        flex-direction: column;
        padding: 24px;

        @media (min-width: 768px) {
          padding: 48px;
        }

        .related-vehicles-title {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 24px;

          color: #163750;
          margin: 0;

          @media (min-width: 768px) {
            font-size: 30px;
            line-height: 38px;
          }
        }

        .relatedV-collapse {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
        }

        .relatedV-collapse-button {
          background-color: white;
          border: none;

          width: 24px;
          height: 24px;

          svg {
            transform: rotate(-360deg);
            transition: transform 250ms;
          }

          &.active {
            svg {
              transform: rotate(-180deg);
            }
          }
        }

        .vehicles-list {
          padding-top: 32px;
          .vehicle-details {
            display: flex;
            justify-content: space-between;
            width: 100%;
            text-decoration: none;
            border-top: 1px solid #eaecf0;

            padding: 24px 0;

            &:hover {
              background-color: #f1f8fc;
            }

            @media (min-width: 768px) {
              padding: 24px 0;
            }

            p.details {
              display: flex;
              gap: 6px;

              @media (min-width: 768px) {
                gap: 12px;
              }

              .name {
                font-family: "Raleway", sans-serif;
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                line-height: 20px;
                color: #163750;

                @media (min-width: 768px) {
                  font-size: 18px;
                  line-height: 28px;
                }
              }

              .model {
                font-family: "Raleway", sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                color: #475467;

                @media (min-width: 768px) {
                  font-size: 16px;
                  line-height: 24px;
                }
              }
            }
          }
        }
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
          margin: 0;

          &.btn-back {
            padding-left: 0;
            padding-right: 0;
          }

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
