import React from "react"
import Topper from "../Topper"
import Legal from "../Legal"
import styled from "styled-components"

const Footer2 = props => {
  const { topperProps } = props

  return (
    <Footer>
      <Container className="container p-0 p-md-4">
        <Topper linksProps={topperProps.linksProps} />
        <Bottom>
          <Divider src="https://anima-uploads.s3.amazonaws.com/projects/6304543bed0f464ca51d71c4/releases/63066d66040de18d57c72f15/img/divider-2@1x.png" />
          <Legal />
        </Bottom>
      </Container>
    </Footer>
  )
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 40px 24px;
  background-color: var(--mirage);

  @media (min-width: 768px) {
    padding: 96px 24px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
  position: relative;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;

  width: 100%;
`

const Divider = styled.img`
  align-self: stretch;
  height: 1px;
  margin-top: -1px;
`

export default Footer2
