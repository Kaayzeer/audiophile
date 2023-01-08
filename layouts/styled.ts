import Image from "next/image";
import ImageYX1Mobile from "../public/assets/home/mobile/image-earphones-yx1.jpg";
import ImageYX1Tablet from "../public/assets/home/tablet/image-earphones-yx1.jpg";
import ImageYX1Desktop from "../public/assets/home/desktop/image-earphones-yx1.jpg";
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
  gridOneMobile?: boolean;
  gridTwoTablet?: boolean;
  gap?: string;
}>`
  display: grid;
  grid-template-columns: ${(props) => props.gridOneMobile && "repeat( 1, 1fr)"};
  gap: ${(props) => props.gap};

  @media (${device.tablet}) {
    grid-template-columns: ${(props) =>
      props.gridTwoTablet && "repeat( 2, 1fr)"};
  }
`;

export const ArticleWrapper = styled.article<{
  color?: string;
  marginLeft?: boolean;
  alignSelf?: string;
  YX1Earphones?: boolean;
}>`
  ${styles.flexColBetween}
  ${(props) => props.YX1Earphones && styles.YX1Earphones};
  gap: ${(props) => props.theme.gap.primary};
  color: ${(props) => props.color};
  text-align: center;
  margin-left: ${(props) => props.marginLeft && "1.5rem"};

  @media (${device.tablet}) {
    margin-left: ${(props) => props.marginLeft && "6rem"};
    max-width: 23.7rem;
    align-self: center;
  }

  @media (${device.laptop}) {
    ${styles.flexColStartBetween}

    max-width: 25rem;
    text-align: left;
    align-self: ${(props) => props.alignSelf ?? "center"};
  }
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
  speakerImgWrapper?: boolean;
  minHeight?: string;
}>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  ${(props) => props.minHeight}
  ${(props) => props.productLinkCardSection && styles.productLinkCardSection}
  ${(props) => props.speakerImgWrapper && styles.speakerImgWrapper}
`;

export const ImageYX1 = styled.picture`
  width: 100%;
  height: 200px;
  background-image: url(${ImageYX1Mobile.src});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.5rem;

  @media (${device.tablet}) {
    background-image: url(${ImageYX1Tablet.src});
    height: 320px;
  }
  @media (${device.laptop}) {
    background-image: url(${ImageYX1Desktop.src});
  }
`;

export const ImageMobile = styled(Image)`
  border-radius: 0.5rem;
  @media (${device.tablet}) {
    display: none;
  }
`;
export const ImageTablet = styled(Image)`
  border-radius: 0.5rem;
  display: none;
  @media (${device.tablet}) {
    display: block;
  }
  @media (${device.laptop}) {
    display: none;
  }
`;
export const ImageLaptop = styled(Image)`
  border-radius: 0.5rem;
  display: none;
  @media (${device.laptop}) {
    display: block;
  }
`;

export const Divider = styled.div<{ size: string }>`
  height: ${(props) => props.size};
`;

export const Section = styled.section<{
  mobileFlexColBetween?: boolean;
  mobileFlexRowCenter?: boolean;
  mobileFlexRowBetween?: boolean;
  laptopFlexRowCenter?: boolean;
  mobileFlexRowStartCenter?: boolean;
  tableSpeaker?: boolean;
  backgroundColor?: string;
  height?: string;
  speakerImgSection?: boolean;
}>`
  ${(props) => props.mobileFlexRowStartCenter && styles.flexRowStartCenter}
  ${(props) => props.mobileFlexRowCenter && styles.flexRowCenter}
  ${(props) => props.mobileFlexColBetween && styles.flexColBetween}
  ${(props) => props.mobileFlexRowBetween && styles.flexRowBetween}

  ${(props) => props.tableSpeaker && styles.tableSpeaker};
  ${(props) => props.speakerImgSection && styles.speakerImgSection};

  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};

  @media (${device.laptop}) {
    ${(props) => props.laptopFlexRowCenter && styles.flexRowCenter}
  }
`;
