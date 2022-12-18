import React, { FC, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import * as B from "./styled";

type Props = {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  fourthly?: boolean;
};

const Button: FC<Props> = ({
  children,
  primary,
  secondary,
  tertiary,
  fourthly,
}) => {
  return (
    <B.Button
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
      fourthly={fourthly}
    >
      {children}
    </B.Button>
  );
};

export default Button;
