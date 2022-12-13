import styled, { StyleSheetManager } from "styled-components";

export const Container = styled.div<{ backgroundColor?: string }>`
  display: flex;
  place-items: center;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
`;
export const MaxWidth = styled.section`
  width: min(100%, ${(props) => props.theme.maxWidth});
  padding: ${(props) => props.theme.padding};
  margin: 0 auto;
`;

export const ArticleWrapper = styled.article<{ h1?: string; h2?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${(props) => (props.h1 ? props.h1 : props.h2)};
`;
