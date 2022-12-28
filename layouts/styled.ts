import styled from "styled-components";
import { device } from "../styles/breakpoints";
import * as styles from "../styles/styledCss";

export const Body = styled.div<{ backgroundColor?: string }>`
  background: ${(props) => props.backgroundColor};
`;

export const Container = styled.div<{
  backgroundColor?: string;
  hero?: boolean;
  height?: string;
  flexColBetween?: boolean;
}>`
  ${styles.flexRow}
  margin: 0 auto;
  justify-content: center;
  width: min(100%, ${(props) => props.theme.maxWidth.container});
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  ${(props) => props.hero && styles.hero};
`;

export const FooterContainer = styled.div<{
  backgroundColor?: string;
}>`
  ${styles.flexRow}
  padding: 2rem;
  margin: 0 auto;
  justify-content: center;
  width: min(100%, ${(props) => props.theme.maxWidth.container});
`;

export const MaxWidth = styled.section<{
  flexColAround?: boolean;
  gap?: string;
}>`
  width: min(100%, ${(props) => props.theme.maxWidth.wrapper});
  padding: ${(props) => props.theme.padding};
  margin: 0 auto;
  ${(props) => props.flexColAround && styles.flexColAround};
  gap: ${(props) => props.gap};
`;

export const ProductGridContainer = styled.div<{
  responsive?: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${(props) => props.responsive && props.theme.gap.fourthly};

  @media (${device.tablet}) {
    grid-template-columns: repeat(${(props) => props.responsive && 3}, 1fr);
    gap: ${(props) => props.responsive && props.theme.gap.large};
  }
`;

export const GridContainer = styled.div<{
  grid?: number;
  gap?: string;
}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.grid}, 1fr);
  gap: ${(props) => props.gap};

  /*   @media (${device.tablet}) {
    grid-template-columns: repeat(${(props) => props.responsive && 3}, 1fr);
    gap: ${(props) => props.responsive && props.theme.gap.large};
  } */
`;

export const ArticleWrapper = styled.article<{
  color?: string;
  marginLeft?: string;
}>`
  ${styles.flexCol}
  margin-left: ${(props) => props.marginLeft};
  gap: ${(props) => props.theme.gap.primary};
  color: ${(props) => props.color};
  max-width: 25rem;
`;

export const FooterArticleWrapper = styled.article<{
  color?: string;
}>`
  ${styles.flexColBetween}
  color: ${(props) => props.color};
  gap: ${(props) => props.theme.gap.primary};
  text-align: center;

  @media (${device.tablet}) {
    ${styles.flexRowBetween}
  }
`;

export const SocialMediaLaptopSection = styled.div`
  display: none;
  @media (${device.laptop}) {
    ${styles.flexRow};
    gap: ${(props) => props.theme.gap.primary};
  }
`;

export const SocialMediaMobileSection = styled.div`
  ${styles.flexRowCenter};
  gap: ${(props) => props.theme.gap.primary};

  @media (${device.laptop}) {
    ${styles.flexRow};
    display: none;
  }
`;

export const ArticleSubHeader = styled.div`
  ${styles.overLine}
`;

export const ArticleHeader = styled.h1``;

export const ArticleHeaderTwo = styled.h2`
  & > span {
    color: ${(props) => props.theme.colors.midBrown};
  }
`;

export const ArticleHeaderFour = styled.h4``;

export const ArticleBody = styled.p`
  margin-bottom: 1rem;
  max-width: 21.8rem;
`;

export const ArticleFooterBody = styled.p`
  max-width: 33.75rem;
  padding: 2rem 0rem;
  @media (${device.tablet}) {
    text-align: left;
    max-width: 100%;
    padding: 0;
  }

  @media (${device.laptop}) {
    max-width: 33.75rem;
  }
`;

export const CopyRight = styled.p`
  text-align: center;
  @media (${device.tablet}) {
    text-align: left;
  }
`;

export const ArticleHeaderSix = styled.h6``;

export const ImageWrapper = styled.picture<{
  productLinkCardSection?: boolean;
  speakerImgSection?: boolean;
}>`
  ${(props) => props.productLinkCardSection && styles.productLinkCardSection}
  ${(props) => props.speakerImgSection && styles.speakerImgSection}
`;

export const Divider = styled.div<{ size: string }>`
  height: ${(props) => props.size};
`;

export const Section = styled.section<{
  center?: boolean;
  startCenter?: boolean;
  flexRowBetween?: boolean;
  tableSpeaker?: boolean;
  backgroundColor?: string;
  height?: string;
}>`
  ${(props) => props.flexRowBetween && styles.flexRowBetween}
  ${(props) => props.center && styles.flexRowCenter}
  ${(props) => props.startCenter && styles.flexRowStartCenter}
  ${(props) => props.tableSpeaker && styles.tableSpeaker};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
`;
