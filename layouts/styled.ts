import styled from "styled-components";
import hero from "../public/assets/home/desktop/image-hero.jpg";
import * as styles from "../styles/styledCss";

export const Body = styled.div<{ backgroundColor?: string }>`
  background: ${(props) => props.backgroundColor};
`;

export const Container = styled.div<{
  backgroundColor?: string;
  hero?: boolean;
}>`
  ${styles.flexRow}
  justify-content: center;
  width: min(100%, ${(props) => props.theme.maxWidth.container});
  background-color: ${(props) => props.backgroundColor};
  ${(props) => props.hero && styles.hero};
`;

export const MaxWidth = styled.section`
  width: min(100%, ${(props) => props.theme.maxWidth.wrapper});
  padding: ${(props) => props.theme.padding};
  margin: 0 auto;
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

export const ArticleWrapper = styled.article<{}>`
  ${styles.flexCol}
  gap: ${(props) => props.theme.gap.primary};
  color: ${(props) => props.theme.colors.white};
  max-width: 25rem;
`;

export const ArticleSubHeader = styled.div``;

export const ArticleHeader = styled.h1``;

export const ArticleBody = styled.p`
  margin-bottom: 1rem;
  max-width: 21.8rem;
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
  backImg?: any;
  backgroundColor?: string;
  height?: string;
}>`
  ${styles.flexRowCenter}
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
`;
