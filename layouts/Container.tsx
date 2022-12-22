import React, { FC, ReactNode } from "react";
import * as Layout from "./styled";

type Props = {
  backgroundColor?: string;
  children?: ReactNode;
  hero?: boolean;
  tableSpeaker?: boolean;
  grid?: number;
  gap?: string;
  height?: string;
  flexColAround?: boolean;
};

export const Container: FC<Props> = ({
  backgroundColor,
  children,
  hero,
  height,
  flexColAround,
  gap,
}) => {
  return (
    <Layout.Container
      backgroundColor={backgroundColor}
      hero={hero}
      height={height}
    >
      <Layout.MaxWidth flexColAround={flexColAround}>
        {children}
      </Layout.MaxWidth>
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
