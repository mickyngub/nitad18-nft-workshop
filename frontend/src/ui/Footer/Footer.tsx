import React from "react";
import styled from "styled-components/macro";
import {
  nitad18LogoBig,
  mfecLogo,
  graceLogo,
  twitterLogo,
  facebookLogo,
  instagramLogo,
  footerOverlayOuter,
  footerOverlayInner,
} from "src/assets";
import { Anchor } from "../Anchor";
const Footer = () => {
  return (
    <WrapperFooter>
      <WrapperContent>
        <WrapperSponsors>
          <div>
            <h1>Sponsors</h1>
          </div>
          <div>
            <SponsorDiv>
              <img src={mfecLogo} alt="MFEC Logo" />
              <img src={graceLogo} alt="GRACE Logo" />
            </SponsorDiv>
          </div>
        </WrapperSponsors>
        <WrapperContacts>
          <div>
            <h1>Contact us</h1>
          </div>
          <WrapperSocial>
            <SocialDiv>
              <img src={instagramLogo} alt="Nitad18 Instagram" />
              <Anchor href="https://www.instagram.com/nitad18th/">
                nitad18th
              </Anchor>
            </SocialDiv>
            <SocialDiv>
              <img src={facebookLogo} alt="Nitad18 Facebook" />
              <Anchor href="https://www.facebook.com/NITAD18TH">
                NITAD 18
              </Anchor>
            </SocialDiv>
            <SocialDiv>
              <img src={twitterLogo} alt="Nitad18 Twitter" />
              <Anchor href="https://twitter.com/nitad18th">NITAD 18</Anchor>
            </SocialDiv>
          </WrapperSocial>
        </WrapperContacts>
        <WrapperLogo>
          <a href="#nav">
            <img src={nitad18LogoBig} alt="NITAD18 Logo" />
          </a>
        </WrapperLogo>
      </WrapperContent>
      <WrapperOverlay>
        <Overlay1>
          <Image src={footerOverlayOuter} />
        </Overlay1>
        <Overlay2>
          <Image src={footerOverlayInner} alt="" />
        </Overlay2>
      </WrapperOverlay>
    </WrapperFooter>
  );
};

const WrapperFooter = styled.footer`
  height: 15rem;
  background: transparent;
  position: relative;
  isolation: isolate;
  color: var(--color-white);
`;
const WrapperContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  position: relative;
  z-index: 2;
`;
const WrapperOverlay = styled.div`
  position: absolute;
  bottom: 0rem;
  width: 100%;
  z-index: 1;
`;
const WrapperSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Overlay1 = styled.div`
  position: absolute;
  bottom: 0rem;
  width: 100%;
`;
const Overlay2 = styled.div`
  position: relative;
  bottom: 0rem;
  width: 100%;
`;
const Image = styled.img<{ src: string | undefined; alt?: string }>`
  width: 100%;
  height: 50%;
`;
const SocialDiv = styled.div`
  display: flex;
  gap: 1.5rem;
  transition: opacity 0.5s ease;
  /* cursor: pointer; */
  &:hover {
    opacity: 0.5;
  }
`;
const SponsorDiv = styled.div`
  display: flex;
  gap: 1rem;
`;
const WrapperSponsors = styled.div`
  flex: 1;
`;
const WrapperContacts = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const WrapperLogo = styled.div`
  flex: 1;
  display: grid;
  place-items: end;
`;
export default Footer;
