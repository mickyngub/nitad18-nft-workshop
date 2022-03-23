import React, { useState } from "react";
import { ethers } from "ethers";
import Button from "src/ui/Button";
import styled from "styled-components";
import CanvasUniverse from "../CanvasUniverse";
import { TitleH1, TitleH2, TitleH4 } from "src/ui/Typography";
import { polygonLogo } from "src/assets";
const Mint = () => {
  const [address, setAddress] = useState<string>("");
  const handleConnectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let signerAddress = await signer.getAddress();
    setAddress(signerAddress);
  };
  return (
    <WrapperMint id="mint">
      <WrapperContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          <img
            src={polygonLogo}
            style={{ width: "4rem", marginBottom: "0.5rem" }}
            alt="Polygon Network Logo"
          />
          <TitleH1 fontFamily="AloneInSpace">Polygon Network</TitleH1>
        </div>

        <TitleH2 fontFamily="AloneInSpace">NFT Contract Address</TitleH2>
        <TitleH4 fontFamily="AloneInSpace">
          0x45772883a4e669b6f9ee3fdbe29f282a1db8fb80
        </TitleH4>
        <TitleH2 fontFamily="AloneInSpace">Your Metamask Address</TitleH2>
        <TitleH4 fontFamily="AloneInSpace">
          {address ? address : "Please Connect with your Metamask Wallet"}{" "}
        </TitleH4>
        <TitleH2 fontFamily="AloneInSpace">Mint Amount</TitleH2>
        <TitleH4 fontFamily="AloneInSpace">1</TitleH4>
        <TitleH2 fontFamily="AloneInSpace">Cost</TitleH2>
        <TitleH4 fontFamily="AloneInSpace">FREE + GAS FEE</TitleH4>
      </WrapperContent>
      <WrapperMinting>
        <WrapperCanvas>
          <CanvasUniverse />
        </WrapperCanvas>
        {!address ? (
          <Button onClick={handleConnectWallet}>Connect Wallet</Button>
        ) : (
          <Button>Mint</Button>
        )}
      </WrapperMinting>
    </WrapperMint>
  );
};
const WrapperMint = styled.div`
  height: 100vh;
  margin-bottom: 15rem;
  padding: 6rem 4rem;
  display: flex;
  /* color: white; */
`;
const WrapperCanvas = styled.div`
  height: 80%;
  width: 100%;
  position: relative;
  border-radius: 10rem;
  overflow: hidden;
`;
const WrapperContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const WrapperMinting = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: start;
`;
const MintingDiv = styled.div`
  /* width: 40%; */
  /* height: 80%; */

  /* justify-content: end; */
  /* place-content: center; */
`;
export default Mint;
