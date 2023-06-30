import styled from "styled-components";
import React from "react";
import { CharDisplay } from "./component/CharDisplay";
import { useEffect, useState } from "react";
import { MenuSelection } from "./MenuSelection";

function RoulettePane({ menuCandidate ,setEffectVisibility}) {
  const [menu, setMenu] = useState([]);

  const [isPress0, setIsPress0] = useState(false);
  const [isPress1, setIsPress1] = useState(false);
  const [isPress2, setIsPress2] = useState(false);
  const [isPress3, setIsPress3] = useState(false);

  let isAnyPressed = isPress0 | isPress1 | isPress2 | isPress3;
  let isAllPressed = isPress0 & isPress1 & isPress2 & isPress3;

  useEffect(() => {
    (async () => {
      setMenu(await MenuSelection.pickUpMenu(menuCandidate));
    })();
  }, [isAnyPressed]);

  useEffect(() => {
    if(isAllPressed){
      if(menu.startsWith("TP")){
        setTimeout(() => setEffectVisibility(true),800)
      }
    }
  }, [isAllPressed])

  async function handleClearButtonPressed() {
    if (isPress0 & isPress1 & isPress2 & isPress3) {
      setMenu(await MenuSelection.pickUpMenu(menuCandidate));
      setIsPress0(false);
      setIsPress1(false);
      setIsPress2(false);
      setIsPress3(false);
    }
  }

  return (
    <RoulettePaneParent>
      <CharDisplayPane>
        <CharDisplay
          char={menu[0]}
          isPress={isPress0}
          setIsPress={setIsPress0}
        ></CharDisplay>
        <CharDisplay
          char={menu[1]}
          isPress={isPress1}
          setIsPress={setIsPress1}
        ></CharDisplay>
        <CharDisplay
          char={menu[2]}
          isPress={isPress2}
          setIsPress={setIsPress2}
        ></CharDisplay>
        <CharDisplay
          char={menu[3]}
          isPress={isPress3}
          setIsPress={setIsPress3}
        ></CharDisplay>
      </CharDisplayPane>
      <ClearButton onClick={handleClearButtonPressed} />
    </RoulettePaneParent>
  );
}

const RoulettePaneParent = styled.div`
  text-align: right;
`;

const CharDisplayPane = styled.div`
  display: flexed;
  width: 100%;
  margin-top: 20%;
`;

const ClearButton = styled.button`
  width: 50%;
  height: 4em;
  background: rgb(219, 150, 57);
  margin-right: 1em;
`;

export { RoulettePane };
