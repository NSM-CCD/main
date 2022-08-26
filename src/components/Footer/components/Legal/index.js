import React from "react"
import Privacy from "../Privacy"
import styled from "styled-components"
import { RalewayMediumSantasGray18px } from "../../styledMixins"

const Legal = () => (
  <Legal1>
    <ClassicCarValue2023>Classic Car Value 2023</ClassicCarValue2023>
    <Privacy />
  </Legal1>
)

const Legal1 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  align-self: stretch;

  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ClassicCarValue2023 = styled.div`
  ${RalewayMediumSantasGray18px};
  min-width: 189px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`

export default Legal
