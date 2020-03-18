import styled from "styled-components"

const S = {}

S.LogoContainer = styled.div`
    font-family: 'Bellota', cursive;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(32,60,87);
    border: 5px solid black;
    border-radius: 25px;
    &:hover {
        background-color: maroon;
    }
    @media only screen and (max-width: 1250px) {
        width: 400px;
    }
    @media only screen and (max-width: 800px) {
        width: 300px;
    }
    @media only screen and (max-width: 300px) {
        width: 200px;
    }
`

S.Logo = styled.h1`
    color: white;
    font-size: 50px;
    margin: 50px 0;
    @media only screen and (max-width: 1250px) {
        margin: 25px 0;
        font-size: 40px;
    }
    @media only screen and (max-width: 800px) {
        margin: 30px 0;
        font-size: 25px;
    }
`

export default S