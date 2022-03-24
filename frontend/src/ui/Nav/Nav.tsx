import React from "react";
import { nitad18Logo, nitad18LogoBig } from "src/assets";
import styled from "styled-components/macro";
import { Anchor } from "../Anchor";
import { TitleH4 } from "../Typography";

const navLinks = [
  {
    name: "",
    link: "https://nitad18.com/digitalmuseum",
  },

  {
    name: "",
    link: "https://nitad18.com/nitalk",
  },

  {
    name: "",
    link: "https://nitad18.com/hackatron",
  },

  {
    name: "",
    link: "https://nitad18.com/inno",
  },

  {
    name: "",
    link: "https://nitad18.com/bootcamp",
  },

  {
    name: "",
    link: "https://nitad18.com/podcast",
  },
];

const Nav = () => {
  return (
    <WrapperNav id="nav">
      <WrapperLogo>
        <Image src={nitad18LogoBig} alt="Nitad18 Logo" />
      </WrapperLogo>
      <WrapperLinks>
        {navLinks.map((navLink) => {
          return (
            <Anchor href={navLink.link} key={navLink.link}>
              <TitleH4>{navLink.name}</TitleH4>
            </Anchor>
          );
        })}
      </WrapperLinks>
    </WrapperNav>
  );
};

const WrapperNav = styled.nav`
  background: transparent;
  height: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;
  padding: 0 4rem;
  padding-top: 3.25rem;
  margin-bottom: 0.5rem;
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
  width: 50px;
  height: 30px;
`;
export default Nav;
