import React from 'react'
import background from "../assets/background.jpg"
import styled from 'styled-components';
export default function BgImage() {
  return (
    <Container>
        <img src= {background} alt="Background-image" />
    </Container>
  )
}
const Container= styled.div`
height: 100vh;
width: 100vw;
img{
    height: 100vh;
    width: 100vw;
}`;
