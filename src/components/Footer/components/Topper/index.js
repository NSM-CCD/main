import React from "react"
import ColumnLeft from "../ColumnLeft"
import Links from "../Links"
import styled from "styled-components"

const Topper = props => {
  const { linksProps } = props

  return (
    <Topper1>
      <ColumnLeft />
      <Links linkColumnProps={linksProps.linkColumnProps} />
    </Topper1>
  )
}

const Topper1 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  width: 100%;

  flex-direction: column;
  gap: 45px;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`

export default Topper
