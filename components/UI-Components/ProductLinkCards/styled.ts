import styled from "styled-components";
import { device } from "../../../styles/breakpoints";
import { flexCol } from "../../../styles/styledCss";

export const CardWrapper = styled.div<{ grid?: number }>`
  ${flexCol}
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.theme.gap.medium};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.greySilver};
  padding: 1.5rem;
`;
