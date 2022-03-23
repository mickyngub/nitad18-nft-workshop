import React from "react";
import styled from "styled-components/macro";
import Nav from "src/ui/Nav";
import CanvasStellar from "src/app/CanvasStellar";
import { TitleH1, TitleH2, TitleH3, TitleH4, TitleH5 } from "src/ui/Typography";
import Button from "src/ui/Button";
import { Anchor } from "src/ui/Anchor";

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
          NITAD18 NFT Workshop
        </TitleH1>
        <div>
          <TitleH5 fontFamily="AloneInSpace">
            Pichaya Puttekulangkura (Micky) - ICE Senior
          </TitleH5>
          <TitleH5 fontFamily="AloneInSpace">
            Dhibadhi Sriuranpong (Atom) - ADME Senior
          </TitleH5>
        </div>
        <a href="#mint">
          <Button>Start</Button>
        </a>
      </WrapperContent>
    </WrapperHero>
  );
};
const WrapperHero = styled.div`
  height: 100vh;
  position: relative;
  top: 0;
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
  width: 70%;
`;
export default Hero;
