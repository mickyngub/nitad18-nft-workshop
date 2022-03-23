import React from "react";
import styled from "styled-components/macro";
import Nav from "src/ui/Nav";
import CanvasStellar from "src/app/CanvasStellar";
import { TitleH1, TitleH2, TitleH3, TitleH4 } from "src/ui/Typography";
import Button from "src/ui/Button";

const Hero = () => {
  return (
    <WrapperHero>
      <Nav />
      <WrapperCanvas>
        <CanvasStellar />
        {/* <CanvasUniverse /> */}
      </WrapperCanvas>
      <WrapperContent>
        <TitleH1 fontFamily="AloneInSpace" fontSize="3rem">
          NITAD
          <span>18</span>
          NFT Workshop
        </TitleH1>
        <div>
          <TitleH4 fontFamily="AloneInSpace">
            Pichaya Puttekulangkura (Micky)
          </TitleH4>
          <TitleH4 fontFamily="AloneInSpace">
            Dhibadhi Sriuranpong (Atom)
          </TitleH4>
        </div>
        <Button />
      </WrapperContent>
    </WrapperHero>
  );
};
const WrapperHero = styled.div`
  height: 100vh;
  position: relative;
  top: 0;
  margin-bottom: 25rem;
`;
const WrapperCanvas = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;
const WrapperContent = styled.div`
  /* height: 100%; */
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 6rem;
  padding: 6rem 4rem;
`;
export default Hero;
