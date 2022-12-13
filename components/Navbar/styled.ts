import styled, { css } from "styled-components";
import Link from "next/link";

const pointer = css`
  cursor: pointer;
`;

export const Container = styled.header`
  display: grid;
  place-items: center;
  min-height: 21rem;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  ${pointer}
`;

export const CartWrapper = styled.div`
  ${pointer};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 96px;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`;

export const LinkWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  ${pointer}
`;

export const Links = styled(Link)``;
