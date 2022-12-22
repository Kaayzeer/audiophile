import styled from "styled-components";
import hero from "../public/assets/home/desktop/image-hero.jpg";
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

export const MaxWidth = styled.section<{ flexColAround?: boolean }>`
  width: min(100%, ${(props) => props.theme.maxWidth.wrapper});
  padding: ${(props) => props.theme.padding};
  margin: 0 auto;
  ${(props) => props.flexColAround && styles.flexColAround};
`;

export const GridContainer = styled.div<{
  grid?: number;
  backgroundColor?: string;
  gap?: string;
}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.grid}, 1fr);
  gap: ${(props) => props.gap};
  background: ${(props) => props.backgroundColor};
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
  ${styles.flexRowBetween}
  color: ${(props) => props.color};
  gap: ${(props) => props.theme.gap.primary};
`;

export const SocialMediaSection = styled.div`
  ${styles.flexRow};
  gap: ${(props) => props.theme.gap.primary};
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
`;

export const CopyRight = styled.p<{ color: string }>`
  color: ${(props) => props.color};
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
