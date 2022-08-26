import React from "react"
import Logo from "../Logo"
import styled from "styled-components"

const ColumnLeft = () => (
  <ColumnLeft1>
    <Logo />
  </ColumnLeft1>
)

const ColumnLeft1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`

export default ColumnLeft
