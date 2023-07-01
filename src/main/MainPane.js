import styled from "styled-components";
import React from "react";
import SaizeLogo from "./../image/logo.png";
import { RoulettePane } from "./RoulettePane";
import { ConfigPane } from "./ConfigPane";
import { useState } from "react";
import { EffectPane } from "../effect/EffectPane";
import { HistoryPane } from "./history/HistoryPane";

import historyButtonImg from "../image/historyButtonImg.svg";

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
  const [historyVisibility, setHistoryVisibility] = useState(false);

  const [historyList, setHistoryList] = useState([]);

  function handleIconImageClicked() {
    setConfigVisibility(!configVisibility);
    console.log(configVisibility);
  }

  function getWindowWidth() {
    return (
      String(Math.min((window.innerHeight * 9) / 16, window.innerWidth)) + "px"
    );
  }

  function addHistory(menu) {
    const tmp = [...historyList];
    tmp.push(menu);
    setHistoryList(tmp);
  }

  return (
    <ParentPane>
      <Background style={{ width: getWindowWidth() }}>
        <HistoryShowButton onClick={() => setHistoryVisibility(true)}>
          <HistoryShowButtonImg src={historyButtonImg} />
          履歴
        </HistoryShowButton>
        <HistoryPane
          visibility={historyVisibility}
          setVisibility={setHistoryVisibility}
          historyList={historyList}
        />
        <EffectPane
          visibility={effectVisibility}
          setVisibility={setEffectVisibility}
        />
        <ConfigPane
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          visibility={configVisibility}
          setVisibility={setConfigVisibility}
        />
        <LogoImg src={SaizeLogo} alt="icon" onClick={handleIconImageClicked} />
        <RoulettePane
          menuCandidate={selectedMenu}
          setEffectVisibility={setEffectVisibility}
          addHistory={addHistory}
        />
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

const HistoryShowButton = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HistoryShowButtonImg = styled.img`
  width: 1em;
  height: 1em;
`;

export { MainPane };
