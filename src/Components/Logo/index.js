import React, { Component } from "react"
import S from "./style"

class Logo extends Component {
    changeLogo = (e) => {
        const logo = e.currentTarget.children[0]
        if(logo.innerText === "ETHAN KIM") {
            e.currentTarget.children[0].innerText = "HONEYFROYO"
        } else {
            e.currentTarget.children[0].innerText = "ETHAN KIM"
        }
    }
    render() {
        return(
            <S.LogoContainer onClick={this.changeLogo}>
                <S.Logo>ETHAN KIM</S.Logo>
            </S.LogoContainer>
        )
    }
}

export default Logo