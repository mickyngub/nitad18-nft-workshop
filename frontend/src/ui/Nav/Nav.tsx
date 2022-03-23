import React from "react";
import { nitad18Logo } from "src/assets";
import styled from "styled-components/macro";
import { Anchor } from "../Anchor";
import { TitleH4 } from "../Typography";

const navLinks = [
  {
    name: "Digital museum",
    link: "https://nitad18.com/digitalmuseum",
  },

  {
    name: "Nitalk",
    link: "https://nitad18.com/nitalk",
  },

  {
    name: "Hackatron",
    link: "https://nitad18.com/hackatron",
  },

  {
    name: "Innofunding & Innocrowding",
    link: "https://nitad18.com/inno",
  },

  {
    name: "Bootcamp",
    link: "https://nitad18.com/bootcamp",
  },

  {
    name: "Podcast",
    link: "https://nitad18.com/podcast",
  },
];

const Nav = () => {
  return (
    <WrapperNav id="nav">
      <WrapperLogo>
        <Image src={nitad18Logo} alt="Nitad18 Logo" />
      </WrapperLogo>
      <WrapperLinks>
        {navLinks.map((navLink) => {
          return (
            <Anchor href={navLink.link}>
              <TitleH4>{navLink.name}</TitleH4>
            </Anchor>
          );
        })}
      </WrapperLinks>
    </WrapperNav>
  );
};

const WrapperNav = styled.nav`
  background: linear-gradient(
    to right,
    hsl(235deg 31% 33%),
    hsl(237deg 33% 21%)
  );
  height: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;
const WrapperLogo = styled.div``;
const WrapperLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Image = styled.img`
  display: block;
`;
export default Nav;
