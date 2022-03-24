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
        <div>
          <TitleH1 fontFamily="AloneInSpace" fontSize="2.5rem">
            NITAD18 NFT Workshop &emsp;
          </TitleH1>
          <div style={{ marginTop: "2rem" }}>
            <TitleH2 fontFamily="AloneInSpace" fontSize="2.75rem" color="black">
              "Into the Metaverse"
            </TitleH2>
          </div>
        </div>
        <TitleH2 fontFamily="AloneInSpace" fontSize="3rem"></TitleH2>
        <div>
          <div style={{ marginBottom: "1rem" }}>
            <TitleH4 fontFamily="AloneInSpace">Presented by</TitleH4>
          </div>
          <TitleH5 fontFamily="AloneInSpace">
            Pichaya Puttekulangkura (Micky) - ICE Senior
          </TitleH5>
          <TitleH5 fontFamily="AloneInSpace">
            Dhibadi Sriuranpong (Atom) - ADME Senior
          </TitleH5>
        </div>
        <ButtonDiv>
          <a href="#mint">
            <Button>Start</Button>
          </a>
        </ButtonDiv>
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
  gap: 1rem;
  padding: 3rem 4rem;
  width: 70%;
`;
const ButtonDiv = styled.div`
  margin-top: 2rem;
`;
export default Hero;
