import styled from "styled-components";
import hero from "../public/assets/home/desktop/image-hero.jpg";
import { device } from "../styles/breakpoints";

export const Body = styled.div<{ backgroundColor?: string }>`
  background: ${(props) => props.backgroundColor};
`;

export const Container = styled.div<{
  backgroundColor?: string;
  backImg?: boolean;
  hero?: boolean;
}>`
  width: min(100%, 1440px);
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: ${(props) => (props.hero ? "45.5625rem" : "auto")};
  background-color: ${(props) => props.backgroundColor};
  background-image: ${(props) => props.backImg && `url(${hero.src})`};
  background-size: ${(props) => props.backImg && "cover"};
  background-repeat: ${(props) => props.backImg && "no-repeat"};
  background-position-y: ${(props) => props.backImg && "center"};
  background-position-x: ${(props) => props.backImg && "left"};
`;

export const GridContainer = styled.div<{
  grid?: number;
  backgroundColor?: string;
  gap?: string;
}>`
  background: ${(props) => props.backgroundColor};
  display: grid;
  grid-template-columns: repeat(${(props) => props.grid}, 1fr);
  gap: ${(props) => props.gap};
`;

export const MaxWidth = styled.section`
  width: min(100%, ${(props) => props.theme.maxWidth});
  padding: ${(props) => props.theme.padding};
  margin: 0 auto;
`;

export const ArticleWrapper = styled.article<{}>`
  display: flex;
  flex-direction: column;
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

export const ImageWrapper = styled.picture<{ marginTop?: string }>`
  margin-top: ${(props) => props.marginTop};
`;

export const Divider = styled.div<{ size: string }>`
  height: ${(props) => props.size};
`;
