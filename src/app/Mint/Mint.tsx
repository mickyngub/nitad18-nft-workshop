import React from "react";
import Button from "src/ui/Button";
import styled from "styled-components";
import CanvasUniverse from "../CanvasUniverse";
const Mint = () => {
  return (
    <WrapperMint>
      <WrapperCanvas>
        <CanvasUniverse />
      </WrapperCanvas>
      <Button glow={false}>Mint</Button>
    </WrapperMint>
  );
};
const WrapperMint = styled.div`
  height: 100vh;
  margin-bottom: 15rem;
`;
const WrapperCanvas = styled.div`
  /* height: 50vh; */
  width: 100%;
  position: relative;
`;
export default Mint;
