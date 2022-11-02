import styled from "styled-components"

export const HeroSection = styled.section`
  padding: 0;
  background-color: #f2f4f7;
`

export const HeroContent = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 40px;

  @media (min-width: 768px) {
    padding-top: 64px;
  }

  @media (min-width: 992px) {
    padding-top: 80px;
  }

  .container {
    @media (min-width: 1366px) {
      max-width: 1170px;
      margin: 0 auto;
    }
  }

  .heading-block {
    display: flex;
    flex-flow: column;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 40px;
    padding: 0 24px;

    max-width: 370px;

    @media (min-width: 768px) {
      padding: 0;
    }

    @media (min-width: 992px) {
      margin-bottom: 64px;
      max-width: 500px;
    }

    .hero-kicker {
      font-family: "Raleway", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #5e8ab4;
    }

    .hero-title {
      font-family: "Raleway", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
      color: #101828;
      margin-bottom: 0;

      span {
        color: #5e8ab4;
      }

      @media (min-width: 992px) {
        font-size: 48px;
        line-height: 60px;
        letter-spacing: -0.02em;
      }
    }

    .hero-subtitle {
      font-family: "Raleway", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #101828;
      margin-bottom: 0;

      @media (min-width: 992px) {
        font-size: 20px;
      }
    }
  }

  .trustbar {
    padding: 0 24px;

    @media (min-width: 768px) {
      padding: 0;
    }

    .trustbar-logos {
      display: flex;
      gap: 16px 32px;
      flex-flow: row wrap;
      max-width: 332px;

      @media (min-width: 1200px) {
        gap: 24px;
        flex-flow: row nowrap;
        max-width: 100%;
      }
    }
  }

  .form-wrapper {
    display: flex;
    justify-content: center;

    padding: 0 24px;

    @media (min-width: 768px) {
      justify-content: flex-end;
      padding: 0;
    }

    .form-container {
      width: 100%;
      max-width: 370px;
      min-width: 328px;

      background: #fff;
      box-shadow: 0 32px 64px -12px rgb(16 24 40 / 14%);
      border-radius: 12px;
      padding: 32px;
      margin-top: 32px;

      margin-bottom: -95px;
      z-index: 1000;

      @media (min-width: 768px) {
        margin-top: 0;
      }

      @media (min-width: 992px) {
        max-width: 570px;
        padding: 50px;
        margin-bottom: -112px;
      }

      @media (min-width: 1200px) {
        max-width: 100%;
      }

      .form-title {
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #101828;

        @media (min-width: 992px) {
          font-size: 24px;
          line-height: 32px;
        }
      }

      hr {
        height: 2px;
        margin: 24px 0;
        background: #eaecf0;
      }

      .form-subtitle {
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #344054;
      }

      .form {
        display: flex;
        flex-flow: column nowrap;
        gap: 20px;

        .form-group {
          label {
            font-family: "Raleway", sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #344054;
            margin-bottom: 6px;
          }

          select.form-select {
            font-family: "Raleway", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;

            border: 1px solid #d0d5dd;
            box-shadow: 0 1px 2px rgb(16 24 40 / 5%);
            border-radius: 8px;
            
            &:focus:not(:focus-visible) {
              outline: none;
            }

            &:focus-visible {
              outline: -webkit-focus-ring-color auto 1px;
            }
            
            &:invalid,
            option[value=""] {
              color: #667085;
            }
          }
        }
      }

      .action-buttons {
        display: flex;
        gap: 12px;
        justify-content: flex-end;

        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;

        button {
          white-space: nowrap;

          &:hover {
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
          }
        }

        .btn-reset {
          background: #fff;
          border: 1px solid #d0d5dd;
          box-shadow: 0 1px 2px rgb(16 24 40 / 5%);
          border-radius: 8px;
          padding: 10px 16px;
        }

        .btn-estimate {
          background: #93272c;
          border: 1px solid #93272c;
          box-shadow: 0 1px 2px rgb(16 24 40 / 5%);
          border-radius: 8px;
          padding: 10px 16px;

          color: #fff;
      }
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100vw;
    min-height: 138px;
  }
`
