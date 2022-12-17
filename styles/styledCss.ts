import { css } from "styled-components";

export const pointer = css`
  cursor: pointer;
`;

export const buttonFlex = css`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.gap.small};
`;

export const buttonStyles = css`
  font-size: 0.8125rem;
  text-transform: uppercase;
  line-height: 25px;
  letter-spacing: 1px;
`;
