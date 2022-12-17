import styled from "styled-components";
import Link from "next/link";
import { pointer } from "../../styles/styledCss";

export const Container = styled.header<{
  backImg?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 20%;
  height: min(45.5625rem, 100%);
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
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 96px;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`;

export const LinkWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${(props) => props.theme.gap.secondary};
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  ${pointer}
`;

export const Links = styled(Link)``;
