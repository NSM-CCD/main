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

      a.side-item {
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
          padding: 40px;
        }

        .features-title {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #3a576f;
        }

        .items-wrapper {
          display: flex;
          flex-flow: row wrap;
          gap: 16px;

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
        background-color: #fff;
        border-radius: 12px;
        padding: 24px;

        @media (min-width: 768px) {
          padding: 48px;
        }
      }

      .sales-history {
        display: flex;
        flex-direction: column;
        gap: 32px;

        background-color: #fff;
        border-radius: 12px;
        padding: 24px;

        @media (min-width: 768px) {
          padding: 48px;
        }

        .switch-buttons {
          .btn-switch {
            border: none;
            background-color: #fff;
            border-radius: 6px;

            font-family: "Raleway", sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            color: #101828;
            padding: 8px 12px;

            &.active {
              background: #f1f8fc;
            }
          }
        }

        .sales-history-title {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 30px;
          line-height: 38px;
          color: #163750;
          margin-bottom: 24px;
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

      .related-vehicles {
        background-color: #fff;
        border-radius: 12px;

        display: flex;
        flex-direction: column;

        .related-vehicles-title {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;

          color: #163750;

          padding: 24px 24px 0;

          @media (min-width: 768px) {
            font-size: 30px;
            line-height: 38px;
            padding: 48px 48px 24px;
          }
        }

        .vehicles-list {
          .vehicle-details {
            display: flex;
            justify-content: space-between;
            width: 100%;
            text-decoration: none;
            border-top: 1px solid #eaecf0;

            padding: 24px;

            &:hover {
              background-color: #f1f8fc;
            }

            @media (min-width: 768px) {
              padding: 24px 48px;
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
