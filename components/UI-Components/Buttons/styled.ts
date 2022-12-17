import styled from "styled-components";

import { buttonFlex, buttonStyles } from "../../../styles/styledCss";

export const Button = styled.button<{
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}>`
  ${buttonStyles}

  ${(props) => props.primary && props.theme.buttons.primary}

  ${(props) => props.secondary && props.theme.buttons.secondary}

  ${(props) => props.tertiary && props.theme.buttons.tertiary}

  ${(props) => props.tertiary && buttonFlex}
`;
