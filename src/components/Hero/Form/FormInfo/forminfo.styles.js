import styled from "styled-components"

export const FormInfoWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .progress {
    height: 8px;

    .progress-bar {
      background-color: #5e8ab4;
      border-radius: 4px;
    }
  }

  .heading {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .title {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #101828;
        margin: 0;
      }

      .sub-title {
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #344054;
      }
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;

      label {
        font-family: "Raleway", sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #344054;
      }

      input {
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #667085;

        border: 1px solid #d0d5dd;
        box-shadow: 0 1px 2px rgb(16 24 40 / 5%);
        border-radius: 8px;

        &:focus-visible {
          outline: -webkit-focus-ring-color auto 1px;
        }
      }
    }
  }

  .terms-policy {
    .agreement {
      font-family: "Raleway", sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #344054;

      a {
        color: #5379a2;
        text-decoration: none;
      }
    }
  }

  .action-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 100%;

    .buttons {
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-end;
      gap: 12px;

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

      .btn-back {
        background: #fff;
        border: 1px solid #d0d5dd;
        box-shadow: 0 1px 2px rgb(16 24 40 / 5%);
        border-radius: 8px;
        padding: 10px 16px;
      }

      .btn-estimate {
        background: #bd5658;
        border: 1px solid #bd5658;
        box-shadow: 0 1px 2px rgb(16 24 40 / 5%);
        border-radius: 8px;
        padding: 10px 16px;

        color: #fff;
      }

      .btn-inquire {
        background: #93272c;
        border: 1px solid #93272c;
        box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        padding: 10px 16px;

        color: #fff;
      }

      @media (min-width: 768px) {
        flex-direction: row;
      }
    }
  }
`
