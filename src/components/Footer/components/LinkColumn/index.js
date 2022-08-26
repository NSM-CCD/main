import React from "react"
import styled from "styled-components"
import {
  RalewaySemiBoldWhite18px,
  RalewaySemiBoldSantasGray18px,
} from "../../styledMixins"

const LinkColumn = props => {
  const { classiccarsCom } = props

  return (
    <LinkColumn1>
      <Partners>Partners</Partners>
      <Classiccarscom>{classiccarsCom}</Classiccarscom>
      <Classiccarscom>Hemmings</Classiccarscom>
      <Classiccarscom>americanmusclecarz.com</Classiccarscom>
      <Classiccarscom>classicandcollectorcars.com</Classiccarscom>
      <Classiccarscom>Auto Trader - Classics</Classiccarscom>
      <Classiccarscom>eBay Motors</Classiccarscom>
    </LinkColumn1>
  )
}

const LinkColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  align-items: flex-start;
  gap: 16px;
`

const Partners = styled.div`
  ${RalewaySemiBoldSantasGray18px};
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`

const Classiccarscom = styled.div`
  ${RalewaySemiBoldWhite18px};
  align-self: stretch;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;

  cursor: pointer;
`

export default LinkColumn
