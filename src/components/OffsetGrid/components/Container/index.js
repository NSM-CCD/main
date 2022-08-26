import React from "react"
import Frame1 from "../Frame1"
import styled from "styled-components"

const Container = props => {
  const { frame11Props, frame12Props } = props

  return (
    <Container1>
      <Frame1
        feature1Props={frame11Props.feature1Props}
        feature2Props={frame11Props.feature2Props}
      />
      <Frame1
        feature1Props={frame12Props.feature1Props}
        feature2Props={frame12Props.feature2Props}
      />
    </Container1>
  )
}

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  position: relative;
`

export default Container
