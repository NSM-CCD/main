import styled from "styled-components"

export const ProcessSliderSection = styled.section`
  background-color: #f9fafb;
  overflow: hidden;
  @media (min-width: 1366px) {
    .container {
      max-width: 1170px;
      margin: 0 auto;
    }
  }
`

export const Content = styled.div`
  padding: 40px 0 24px 24px;

  @media (min-width: 768px) {
    padding: 96px 0;
  }

  .d-container {
    padding: 0;
    .slick-initialized .slick-slide {
      display: block;
      padding-right: 0;
      min-width: 328px;

      @media (min-width: 768px) {
        padding-right: 38px;
      }
    }

    .slick-list {
      overflow: hidden;

      @media (min-width: 540px) {
        overflow: visible;
      }
    }
  }

  .m-arrows {
    display: block;
    margin-top: 32px;

    @media (min-width: 1200px) {
      display: none;
    }
  }
`

export const ArrowButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;

  button {
    outline: none;
    background: transparent;
    border: none;

    &.first-item,
    &.last-item {
      cursor: default;
      opacity: 0.5;
    }
  }
`

export const HeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-right: 24px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    padding-right: 0;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrows {
      display: none;

      @media (min-width: 1200px) {
        display: block;
      }
    }
  }

  .kicker {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #5e8ab4;
  }

  .heading {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
    margin: 0;
    max-width: 670px;

    span {
      color: #5e8ab4;
    }

    @media (min-width: 768px) {
      font-size: 48px;
      line-height: 60px;
      letter-spacing: -0.02em;
    }
  }
`

export const Slides = styled.div`
  .slide-item {
    .slide-number {
      width: 100%;
      margin-bottom: 40px;
      position: relative;
      background: #f9fafb;

      @media (min-width: 768px) {
        margin-bottom: 56px;
      }

      &:before {
        width: 100%;
        border-bottom: 2px solid black;
        content: " ";
        display: flex;
        position: absolute;
        top: 21px;
        left: 38px;
      }

      .number {
        width: 40px;
        height: 40px;
        padding: 6px;
        border: 2px solid #101828;
        border-radius: 50%;
        text-align: center;

        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #101828;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .slide-content {
      display: flex;
      flex-direction: column;
      gap: 30px;

      @media (min-width: 992px) {
        flex-direction: row;
      }

      .details {
        display: flex;
        flex-direction: column;
        gap: 16px;

        @media (min-width: 768px) {
          gap: 24px;
        }

        .title {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 30px;
          color: #101828;
          margin: 0;

          @media (min-width: 768px) {
            font-size: 30px;
            line-height: 38px;
          }
        }

        .description {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          color: #475467;
          margin: 0;

          @media (min-width: 768px) {
            font-size: 20px;
            line-height: 30px;
          }
        }
      }

      .slider-image {
        img {
          max-width: 320px;

          @media (min-width: 768px) {
            max-width: 370px;
          }

          @media (min-width: 992px) {
            max-width: 500px;
          }
        }
      }
    }
  }
`
