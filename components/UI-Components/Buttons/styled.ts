import styled from "styled-components";

import {
  buttonFlex,
  buttonAndNavStyles,
  pointer,
} from "../../../styles/styledCss";

export const Button = styled.button<{
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  fourthly?: boolean;
}>`
  ${buttonAndNavStyles}
  ${pointer}

  ${(props) => props.primary && props.theme.buttons.primary}

  ${(props) => props.secondary && props.theme.buttons.secondary}

  ${(props) => props.tertiary && props.theme.buttons.tertiary}

  ${(props) => props.fourthly && props.theme.buttons.fourthly}

  ${(props) => props.tertiary && buttonFlex}
`;
