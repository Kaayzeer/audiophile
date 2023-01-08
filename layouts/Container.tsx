import React, { FC, ReactNode } from "react";
import * as Layout from "./styled";

type Props = {
  gap?: string;
  gridOneMobile?: boolean;
  gridTwoTablet?: boolean;
  responsive?: boolean;
  backgroundColor?: string;
  children?: ReactNode;
  hero?: boolean;
  tableSpeaker?: boolean;
  height?: string;
  flexColAround?: boolean;
  padding?: string;
};

export const Container: FC<Props> = ({
  backgroundColor,
  children,
  hero,
  flexColAround,
}) => {
  return (
    <Layout.Container backgroundColor={backgroundColor} hero={hero}>
      <Layout.MaxWidth flexColAround={flexColAround}>
        {children}
      </Layout.MaxWidth>
    </Layout.Container>
  );
};

export const FooterContainer: FC<Props> = ({
  backgroundColor,
  children,
  flexColAround,
  gap,
}) => {
  return (
    <Layout.FooterContainer backgroundColor={backgroundColor}>
      <Layout.MaxWidth flexColAround={flexColAround} gap={gap}>
        {children}
      </Layout.MaxWidth>
    </Layout.FooterContainer>
  );
};

export const ProductGridContainer: FC<Props> = ({ responsive, children }) => {
  return (
    <Layout.ProductGridContainer responsive={responsive}>
      {children}
    </Layout.ProductGridContainer>
  );
};

export const GridContainer: FC<Props> = ({
  gridOneMobile,
  gridTwoTablet,
  gap,
  children,
}) => {
  return (
    <Layout.GridContainer
      gridOneMobile={gridOneMobile}
      gridTwoTablet={gridTwoTablet}
      gap={gap}
    >
      {children}
    </Layout.GridContainer>
  );
};
