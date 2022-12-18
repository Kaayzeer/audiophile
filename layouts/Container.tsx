import React, { FC, ReactNode } from "react";
import * as Layout from "./styled";

type Props = {
  backgroundColor?: string;
  children?: ReactNode;
  hero?: boolean;
  grid?: number;
  gap?: string;
};

export const Container: FC<Props> = ({ backgroundColor, children, hero }) => {
  return (
    <Layout.Container backgroundColor={backgroundColor} hero={hero}>
      <Layout.MaxWidth>{children}</Layout.MaxWidth>
    </Layout.Container>
  );
};

export const GridContainer: FC<Props> = ({
  backgroundColor,
  children,
  grid,
  gap,
}) => {
  return (
    <Layout.GridContainer
      backgroundColor={backgroundColor}
      grid={grid}
      gap={gap}
    >
      {children}
    </Layout.GridContainer>
  );
};
