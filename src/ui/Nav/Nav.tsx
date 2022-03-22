import React from "react";
import { nitad18Logo } from "src/assets";
import styled from "styled-components/macro";

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
    <WrapperNav>
      <WrapperLogo>
        <Image src={nitad18Logo} alt="Nitad18 Logo" />
      </WrapperLogo>
      <WrapperLinks>
        {navLinks.map((navLink) => {
          return (
            <a href={navLink.link} target="_blank">
              {navLink.name}
            </a>
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
  height: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;
`;
const WrapperLogo = styled.div`
  /* justify-self: start; */
  /* justify-self: center; */
  padding: 0 1rem;
`;
const WrapperLinks = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 0.25rem; */
  padding: 0 1rem;
`;
const Image = styled.img`
  display: block;
`;
export default Nav;
