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
              <img src={instagramLogo} alt="" />
              <h4>nitad18th</h4>
            </SocialDiv>
            <SocialDiv>
              <img src={facebookLogo} alt="" />
              <h4>NITAD 18</h4>
            </SocialDiv>
            <SocialDiv>
              <img src={twitterLogo} alt="" />
              <h4>NITAD 18</h4>
            </SocialDiv>
          </WrapperSocial>
        </WrapperContacts>
        <WrapperLogo>
          <div>
            <img src={nitad18LogoBig} alt="NITAD18 Logo" />
          </div>
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
