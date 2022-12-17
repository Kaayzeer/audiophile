import React, { FC, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import * as B from "./styled";

type Props = {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
};

const Button: FC<Props> = ({ children, primary, secondary, tertiary }) => {
  return (
    <B.Button primary={primary} secondary={secondary} tertiary={tertiary}>
      {children}
    </B.Button>
  );
};

export default Button;
