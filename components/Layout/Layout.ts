import styled from "styled-components";

export const Container = styled.div<{ backgroundColor?: string }>`
  display: flex;
  place-items: center;
  background-color: ${(props) => props.backgroundColor};
`;
export const MaxWidth = styled.section`
  width: min(100%, ${(props) => props.theme.maxWidth});
  padding: ${(props) => props.theme.padding};
`;
