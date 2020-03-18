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
`

S.Logo = styled.h1`
    color: white;
    font-size: 50px;
    margin: 50px 0;
`

export default S