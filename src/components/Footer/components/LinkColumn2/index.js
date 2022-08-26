import React from "react"
import styled from "styled-components"
import {
  RalewaySemiBoldWhite18px,
  RalewaySemiBoldSantasGray18px,
} from "../../styledMixins"

const LinkColumn2 = () => (
  <LinkColumn>
    <HelpfulLinks>Helpful Links</HelpfulLinks>
    <GetAQuote>Get a Quote</GetAQuote>
    <GetAQuote>ACI Blog</GetAQuote>
    <GetAQuote>Insurance Policies</GetAQuote>
  </LinkColumn>
)

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  align-items: flex-start;
  gap: 16px;
`

const HelpfulLinks = styled.div`
  ${RalewaySemiBoldSantasGray18px};
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`

const GetAQuote = styled.div`
  ${RalewaySemiBoldWhite18px};
  align-self: stretch;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;

  cursor: pointer;
`

export default LinkColumn2
