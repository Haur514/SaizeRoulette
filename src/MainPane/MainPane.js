import styled from "styled-components";
import React from "react";
import SaizeLogo from "./../image/logo.png"
import { RoulettePane } from "./RoulettePane";

function MainPane() {

  function getWindowWidth(){
    return String(Math.min(window.innerHeight * 9 / 16 , window.innerWidth))+"px";
  }

  return (
    <ParentPane>
    <Background style={{width: getWindowWidth()}}>
      <div>
      <LogoImg src={SaizeLogo} alt="icon" />
      </div>
      <div>
      <RoulettePane />
      </div>
    </Background>
    </ParentPane>
  );
}

const ParentPane = styled.div`
  background: #9eff9e;
`

const Background = styled.div`
  background: rgb(74,163,81);
    height:100vh;
    margin: 0 auto;
    text-align: center;
`

const LogoImg = styled.img`
    width:100%;
`



export { MainPane };
