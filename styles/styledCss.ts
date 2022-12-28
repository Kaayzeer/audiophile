import { css } from "styled-components";
import heroImgDesktop from "../public/assets/home/desktop/image-hero.jpg";
import heroImgTablet from "../public/assets/home/tablet/image-header.jpg";
import heroImgMobile from "../public/assets/home/mobile/image-header.jpg";
import SpeakerWTable from "../public/assets/home/desktop/image-speaker-zx7.jpg";
import { device } from "./breakpoints";

export const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const flexColAround = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const flexRow = css`
  display: flex;
  flex-direction: row;
`;

export const flexRowStartCenter = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const flexRowCenter = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const flexRowBetween = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const flexColBetween = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const flexColStartBetween = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
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

export const overLine = css`
  font-size: 0.875rem;
  text-transform: uppercase;
  line-height: 19px;
  letter-spacing: 10px;
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
  background-image: url(${heroImgMobile.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (${device.tablet}) {
    background-image: url(${heroImgTablet.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (${device.laptop}) {
    background-image: url(${heroImgDesktop.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const tableSpeaker = css`
  background-image: url(${SpeakerWTable.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const BestAudioGear = css``;
