import React from "react";
import styled from "styled-components";
import AA from "./../image/AA.png";
import DE from "./../image/DE.png";
import DG from "./../image/DG.png";
import MT from "./../image/MT.png";
import PA from "./../image/PA.png";
import PZ from "./../image/PZ.png";
import RP from "./../image/RP.png";
import SA from "./../image/SA.png";
import SU from "./../image/SU.png";
import TP from "./../image/TP.png";

const menu_icon_dict = {
  "14": AA,
  "32": DE,
  "21": DG,
  "24": MT,
  "23": PA,
  "22": PZ,
  "31": RP,
  "12": SA,
  "13": SU,
  "43": TP,
};

function ConfigPane({
  selectedMenu,
  setSelectedMenu,
  visibility,
  setVisibility,
}) {
  function addMenu(menu) {
    let tmp = selectedMenu.concat();
    tmp.push(menu);
    setSelectedMenu(tmp);
  }

  function removeMenu(menu) {
    if (selectedMenu.length <= 1) {
      return;
    }
    const tmp = selectedMenu.filter((n) => n !== menu);
    setSelectedMenu(tmp);
  }

  function handleClickEvent(e) {
    const menu = e.target.value;
    if (selectedMenu.includes(menu)) {
      removeMenu(menu);
    } else {
      addMenu(menu);
    }
  }

  function handleBackButtonClicked() {
    setVisibility(false);
  }

  function handleMainDishButtonClicked() {
    setSelectedMenu(["21", "22", "23", "24"]);
  }

  function handleAppetizerButtonClicked() {
    setSelectedMenu(["12", "13", "14"]);
  }

  return (
    <ParentPane style={{ visibility: visibility ? "visible" : "hidden" }}>
      <BackGroundPane>
        <TemplatePane>
          <MainDishButton onClick={handleAppetizerButtonClicked}>
            前菜
          </MainDishButton>
          <MainDishButton onClick={handleMainDishButtonClicked}>
            主菜
          </MainDishButton>
        </TemplatePane>
        {Object.keys(menu_icon_dict).map((menu) => {
          return (
            <RadioButtonLabel>
              <MenuLogoImg src={menu_icon_dict[menu]} />
              <input
                type="radio"
                value={menu}
                checked={selectedMenu.includes(menu)}
                onClick={handleClickEvent}
              />
              {menu}
            </RadioButtonLabel>
          );
        })}
        <BackButtonPane>
          <BackButton onClick={handleBackButtonClicked}>戻る</BackButton>
        </BackButtonPane>
      </BackGroundPane>
    </ParentPane>
  );
}

const MenuLogoImg = styled.img`
  width: 2em;
  height: 2em;
  margin: 0 1em;
`;

const BackButtonPane = styled.div``;

const BackButton = styled.button`
  margin: 1em auto;
  display: block;
  font-size: 1em;
  width: 50%;
  height: 2em;
`;

const RadioButtonLabel = styled.label`
  display: flex;
  margin: 0em 1em;
  justify-content: center;
  align-items: center;
`;

const ParentPane = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  font-size: 2em;
`;

const BackGroundPane = styled.div`
  position: relative;
  background: #fff;
  padding: 1em;
  border-radius: 0.5em;
  margin: 1em;
  overflow-y: scroll;
  max-height: 80vh;
`;

const TemplatePane = styled.div`
  display: flex;
`;

const MainDishButton = styled.div`
  position: relative;
  display: flex;
  height: 2em;
  width: 49.5%;
  margin: 0.25%;
  text-align: center;
  background: rgb(225, 225, 225);
  justify-content: center;
  align-items: center;
`;

export { ConfigPane };
