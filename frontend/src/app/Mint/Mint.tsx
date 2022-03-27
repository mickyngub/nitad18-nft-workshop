import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "src/ui/Button";
import styled from "styled-components";
import CanvasUniverse from "../CanvasUniverse";
import { TitleH1, TitleH2, TitleH3, TitleH4, TitleH5 } from "src/ui/Typography";
import { polygonLogo } from "src/assets";
import { Anchor } from "src/ui/Anchor";
import useContract from "src/hooks/useContract";
const Mint = () => {
  const [address, setAddress] = useState<string>("");
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>();
  const [mining, setMining] = useState<boolean>(false);
  const { NFT_CONTRACT, NFT_INTERFACE, NFT_ADDRESS } = useContract();

  const handleConnectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let signerAddress = await signer.getAddress();
    setAddress(signerAddress);
    setSigner(signer);
    notifyWalletConnected();
  };

  const handleMint = async () => {
    // console.log("clicked mint");
    // console.log(signer);
    if (signer) {
      try {
        let txnHash = await NFT_CONTRACT.connect(signer).mint();
        setMining(true);
        // console.log("txnHash", txnHash);
        let txnReceipt = await txnHash.wait();
        // console.log("confirmation", txnReceipt.confirmations);
        if (txnReceipt.confirmations == 1) notifyMintSuccess();
        setMining(false);
      } catch (e) {
        console.log(e);
        notifyMintFail();
        setMining(false);
      }
    }
  };

  const notifyWalletConnected = () => {
    toast("Wallet Connected");
  };
  const notifyMintSuccess = () => {
    toast("Mint Success");
  };
  const notifyMintFail = () => {
    toast("Mint Failed");
  };
  return (
    <WrapperMint id="mint">
      <WrapperContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          <img
            src={polygonLogo}
            style={{ width: "4rem", marginBottom: "0.5rem" }}
            alt="Polygon Network Logo"
          />
          <TitleH1 fontFamily="AloneInSpace">Polygon Network</TitleH1>
        </div>
        <TitleH3 fontFamily="AloneInSpace">NFT Contract Address</TitleH3>
        <Anchor href={`https://polygonscan.com/address/${NFT_ADDRESS}`}>
          <TitleH5 fontFamily="AloneInSpace" color="var(--color-black)">
            {NFT_ADDRESS}
          </TitleH5>
        </Anchor>
        <TitleH3 fontFamily="AloneInSpace">Opensea Collection</TitleH3>
        <Anchor href="https://opensea.io/collection/nitad18-nft">
          <TitleH5 fontFamily="AloneInSpace" color="var(--color-black)">
            opensea.io/collection/nitad18-nft
          </TitleH5>
        </Anchor>
        <TitleH3 fontFamily="AloneInSpace">Your Metamask Address</TitleH3>
        <TitleH5 fontFamily="AloneInSpace">
          {address ? address : "Please Connect with your Metamask Wallet"}{" "}
        </TitleH5>
        {address ? (
          <>
            <TitleH3 fontFamily="AloneInSpace">Mint Amount</TitleH3>
            <TitleH5 fontFamily="AloneInSpace">1</TitleH5>
            <TitleH3 fontFamily="AloneInSpace">Cost</TitleH3>
            <TitleH5 fontFamily="AloneInSpace">FREE + GAS FEE</TitleH5>
          </>
        ) : (
          ""
        )}
      </WrapperContent>
      <WrapperMinting>
        <WrapperCanvas>
          <CanvasUniverse />
        </WrapperCanvas>
        {!address ? (
          <Button onClick={handleConnectWallet}>Connect Wallet</Button>
        ) : (
          <Button onClick={handleMint} disabled={true}>
            SOLD OUT
          </Button>
        )}
      </WrapperMinting>
      <ToastContainer />
    </WrapperMint>
  );
};
const WrapperMint = styled.div`
  height: 100vh;
  margin-bottom: 15rem;
  padding: 4rem 4rem 6rem;
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
  position: relative;
  z-index: 4;
`;
const MintingDiv = styled.div`
  /* width: 40%; */
  /* height: 80%; */

  /* justify-content: end; */
  /* place-content: center; */
`;
export default Mint;
