import styled from "styled-components";
import Link from "next/link";
import { pointer } from "../../styles/styledCss";
import { flexCol, flexRow, buttonAndNavStyles } from "../../styles/styledCss";

export const Container = styled.header<{
  backImg?: boolean;
}>`
  ${flexCol};
  gap: 20%;
  height: min(45.5625rem, 100%);
`;

export const LogoWrapper = styled.div`
  ${pointer}
`;

export const CartWrapper = styled.div`
  ${pointer};
`;

export const Nav = styled.nav<{ borderBottom?: boolean }>`
  ${flexRow};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 96px;
  border-bottom: ${(props) =>
    props.borderBottom && `1px solid ${props.theme.colors.white}`};
`;

export const LinkWrapper = styled.ul`
  ${flexRow};
  justify-content: space-between;
  gap: ${(props) => props.theme.gap.secondary};
  color: ${(props) => props.theme.colors.white};
  ${pointer}
`;

export const Links = styled(Link)`
  ${buttonAndNavStyles}
`;
