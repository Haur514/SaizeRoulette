import styled from "styled-components";
import React from "react";
import { useState ,useEffect} from "react";
import EF1 from "./../image/effect1.png";
import useSound from "use-sound";
import sfx from "../sound/aori.wav"


function EffectPane({
  visibility,
  setVisibility
}) {

    const [isSoundAllow,setIsSoundAllow] = useState(false);
    const[play_ef1_sound] = useSound(sfx);

    useEffect(() => {
        if(visibility){
            if(isSoundAllow){
                play_ef1_sound();
            }
        }
    },[visibility])
  return (
    <ParentPane style={{visibility: visibility ? "visible":"hidden"}} onClick={() => {setVisibility(!visibility)}}>
        <EF1IMG src={EF1}/>
        <EF1TEXT>
            残念...w
        </EF1TEXT>
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

const EF1TEXT = styled.div`
    position: relative;
    background: #fff;
    font-size: 2em;
    letter-spacing: 0.1em;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    text-shadow: 1px 5px 16px rgba(255,178,216,0.9);
`

export { EffectPane };
