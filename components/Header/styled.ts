import styled from "styled-components";
import Link from "next/link";
import { pointer } from "../../styles/styledCss";
import {
  flexCol,
  flexRow,
  buttonAndNavStyles,
  flexRowBetween,
  flexColBetween,
  flexColStartBetween,
} from "../../styles/styledCss";
import { device } from "../../styles/breakpoints";
import { colors } from "../../styles/colors";
import Image from "next/image";

export const Container = styled.header<{}>`
  ${flexCol};
  gap: 20%;
  height: min(45.5625rem, 100%);
`;

export const LogoWrapper = styled.div`
  ${pointer}
`;

export const HamburgerWrapper = styled.div`
  ${pointer}
  @media (${device.tablet}) {
    display: none;
  }
`;

export const CartWrapper = styled.div`
  ${pointer};
`;

export const Nav = styled.nav<{}>`
  position: relative;
  ${flexRow};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 96px;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`;

export const FooterNav = styled.nav<{}>`
  ${flexColBetween};
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (${device.tablet}) {
    ${flexColStartBetween};
  }

  @media (${device.laptop}) {
    ${flexRowBetween};
    gap: 0;
  }
`;

export const LinkWrapper = styled.ul`
  display: none;
  @media (${device.tablet}) {
    ${flexRowBetween};
    ${pointer}
    gap: ${(props) => props.theme.gap.secondary};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const FooterLinkWrapper = styled.ul`
  ${flexColBetween};
  ${pointer}
  gap: ${(props) => props.theme.gap.secondary};
  color: ${(props) => props.theme.colors.white};

  @media (${device.tablet}) {
    ${flexRowBetween};
  }
`;

export const Links = styled(Link)`
  ${buttonAndNavStyles}
`;

export const HamburgerMenuBackDrop = styled.div`
  position: fixed;
  top: 95px;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  width: 100vw;
  height: 100vh;
  overflow-x: scroll;
  background: #979797;
  z-index: 10;

  @media (${device.tablet}) {
    display: none;
  }
`;

export const HamburgerMenuWrapper = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  background-color: ${colors.white};
  height: 80%;
  padding-top: 1rem;
`;
