import styled from "styled-components";
import React from "react";
import { useEffect,useState,useRef,useCallback } from "react";
function CharDisplay({char,isPress,setIsPress}) {

  const intervalRef = useRef(null);

  const[randomCharactor, setRandomCharactor] = useState("-");

  useEffect(() => {
    start();
  },[])

  const start = useCallback(() => {
    intervalRef.current = setInterval(() => {
      console.log("OK");
      if(Math.random() > 0.5){
        setRandomCharactor(String.fromCharCode(Math.floor( Math.random() * 25 ) + 65));
      }else{
        setRandomCharactor(String.fromCharCode(Math.floor( Math.random() * 10 ) + 48));
      }
    }, 400);
  }, []);

  const stop = useCallback(() => {
    setIsPress(true);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  })

  return (
    <CharDisplayWrapper>
      <Char>{isPress ? char:randomCharactor}</Char>
      <StartButton style={{background: isPress ? "blue":"rgb(222,10,36"}} onClick={isPress ? start : stop}/>
    </CharDisplayWrapper>
  );
}

const CharDisplayWrapper=styled.div`
width:25%;
text-align: center;
`

const Char = styled.div`
    width: 90%;
    margin: 5%;
    background: white;
    color:black;
    font-size: 5em;
`

const StartButton = styled.button`
    color:white;
    width: 5em;
    height: 5em;
    border-radius: 50%;
    margin: 40% 1em;
`

export { CharDisplay };
