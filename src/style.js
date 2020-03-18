import styled from "styled-components"

const S = {}

S.Container1 = styled.div`
  background-image: url("https://66.media.tumblr.com/e217ce43e0d51b2679bd464735b45be6/0a6e09610d08d3b5-75/s2048x3072/8297531dd6035c97f8b300ded58bb4fef160603e.jpg");
  background-position: 0px 100%, 0px -100%;
  background-repeat: no-repeat;
  background-size: 80%;
  background-color: rgb(246,246,246);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 800px) {
        background-size: 90%;
    }
  @media only screen and (max-width: 375px) {
        background-size: 150%;
    }
`

export default S