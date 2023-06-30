import styled from "styled-components";
import React from "react";
import SaizeLogo from "./../image/logo.png";
import { RoulettePane } from "./RoulettePane";
import { ConfigPane } from "./ConfigPane";
import { useState } from "react";
import { EffectPane } from "../effect/EffectPane";

function MainPane() {
  const [selectedMenu, setSelectedMenu] = useState([
    "AA",
    "DE",
    "DG",
    "MT",
    "PA",
    "PZ",
    "RP",
    "SA",
    "SU",
    "TP",
  ]);

  const [configVisibility, setConfigVisibility] = useState(false);
  const [effectVisibility, setEffectVisibility] = useState(false);


  function handleIconImageClicked() {
    setConfigVisibility(!configVisibility);
    console.log(configVisibility);
  }

  function getWindowWidth() {
    return (
      String(Math.min((window.innerHeight * 9) / 16, window.innerWidth)) + "px"
    );
  }

  return (
    <ParentPane>
      <Background style={{ width: getWindowWidth() }}>
        <EffectPane visibility={effectVisibility} setVisibility={setEffectVisibility}>
          hoge
        </EffectPane>
        <ConfigPane
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          visibility={configVisibility}
          setVisibility={setConfigVisibility}
        />
        <LogoImg src={SaizeLogo} alt="icon" onClick={handleIconImageClicked} />
        <RoulettePane menuCandidate={selectedMenu} setEffectVisibility={setEffectVisibility}/>
      </Background>
    </ParentPane>
  );
}

const ParentPane = styled.div`
  background: #9eff9e;
`;

const Background = styled.div`
  position: relative;
  background: rgb(74, 163, 81);
  height: 100vh;
  margin: 0 auto;
  text-align: center;
`;

const LogoImg = styled.img`
  width: 100%;
`;

export { MainPane };
