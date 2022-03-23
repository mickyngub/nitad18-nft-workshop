import React from "react";
import styled from "styled-components/macro";
import Nav from "src/ui/Nav";
import CanvasStellar from "src/app/CanvasStellar";
import { TitleH1, TitleH2, TitleH4 } from "src/ui/Typography";
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
        <TitleH1 fontFamily="AloneInSpace" fontSize="4rem">
          NFT Workshop
        </TitleH1>
        <TitleH2 fontFamily="AloneInSpace">Pichaya Puttekulangkura</TitleH2>
        <TitleH2 fontFamily="AloneInSpace">Dhibadhi Sriuranpong</TitleH2>
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
  position: relative;
  color: white;
`;
export default Hero;
