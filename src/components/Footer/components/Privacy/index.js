import React from "react"
import styled from "styled-components"
import { RalewayMediumSantasGray18px } from "../../styledMixins"

const Privacy = () => (
  <Privacy1>
    <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
    <TermsConditions>Terms &amp; Conditions</TermsConditions>
  </Privacy1>
)

const Privacy1 = styled.div`
  ${RalewayMediumSantasGray18px};
  display: flex;
  align-items: flex-start;
  gap: 32px;
`

const PrivacyPolicy = styled.div`
  min-width: 116px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;

  cursor: pointer;
`

const TermsConditions = styled.div`
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;

  cursor: pointer;
`

export default Privacy
