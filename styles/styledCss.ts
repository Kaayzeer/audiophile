import { css } from "styled-components";
import heroImg from "../public/assets/home/desktop/image-hero.jpg";

export const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const flexRow = css`
  display: flex;
  flex-direction: row;
`;

export const flexRowCenter = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const pointer = css`
  cursor: pointer;
`;

export const buttonFlex = css`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.gap.small};
`;

export const buttonAndNavStyles = css`
  font-size: 0.8125rem;
  text-transform: uppercase;
  line-height: 25px;
  letter-spacing: 1px;
`;

export const speakerImgSection = css`
  width: 40%;
  align-self: flex-end;
  margin-bottom: -0.74rem;
  clip-path: inset(0 0 3% 0);
`;

export const productLinkCardSection = css`
  margin-top: -5rem;
`;

export const hero = css`
  height: 45.5625rem;
  background-image: url(${heroImg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
