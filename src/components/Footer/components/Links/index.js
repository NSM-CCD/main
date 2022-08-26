import React from "react"
import LinkColumn from "../LinkColumn"
import LinkColumn2 from "../LinkColumn2"
import styled from "styled-components"

const Links = props => {
  const { linkColumnProps } = props

  return (
    <Links1>
      <LinkColumn classiccarsCom={linkColumnProps.classiccarsCom} />
      <LinkColumn2 />
    </Links1>
  )
}

const Links1 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  position: relative;

  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export default Links
