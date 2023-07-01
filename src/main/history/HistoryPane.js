import styled from "styled-components";
import React from "react";
import { useState ,useEffect} from "react";

function HistoryPane({
  visibility,
  setVisibility,
  historyList
}) {
  return (
    <ParentPane style={{visibility: visibility ? "visible":"hidden"}} onClick={() => {setVisibility(!visibility)}}>
        {historyList.map((history) => {
            return(
                <HistoryText>
                    {history}
                </HistoryText>
            );
        })}
    </ParentPane>
  );
}

const EF1IMG = styled.img`
    width: 80%;
    margin: 2em 0em;
`

const ParentPane = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  font-size: 2em;
  background: rgba(0,0,0,0.9);
`;

const HistoryText = styled.div`
    position: relative;
    background: #fff;
    font-size: 2em;
    letter-spacing: 0.1em;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    text-shadow: 1px 5px 16px rgba(255,178,216,0.9);
`

export { HistoryPane };
