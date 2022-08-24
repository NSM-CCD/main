import styled from "styled-components"

export const HeaderMain = styled.header`
  border-bottom: 1px solid #eaecf0;

  .btn-cta {
    border: 1px solid #d0d5dd;
    box-shadow: 0 1px 2px rgb(16 24 40 / 5%);
    border-radius: 8px;
    padding: 10px 18px;
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #344054;
    user-select: none;

    svg {
      margin-top: -4px;
      margin-left: 8px;
    }

    &.bg-red {
      color: #fff;
      background: #93272c;
      border: 1px solid #93272c;

      svg path {
        stroke: #fff;
      }
    }
  }
`
