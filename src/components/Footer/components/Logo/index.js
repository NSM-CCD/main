import React from "react"
import styled from "styled-components"

const Logo = () => (
  <Logo1>
    <Logo2 src="https://anima-uploads.s3.amazonaws.com/projects/6304543bed0f464ca51d71c4/releases/63066d66040de18d57c72f15/img/logo@2x.png" />
  </Logo1>
)

const Logo1 = styled.div`
  display: flex;
  align-items: flex-start;
`

const Logo2 = styled.img`
  height: 64px;
`

export default Logo
