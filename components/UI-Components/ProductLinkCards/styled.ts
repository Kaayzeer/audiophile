import styled from "styled-components";

export const CardWrapper = styled.div<{ grid?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.theme.gap.medium};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.greySilver};
  padding: 1.5rem;
  max-height: 12.75rem;
`;
