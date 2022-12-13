import React, { FC, ReactNode } from "react";
import * as Layout from "./styled";

type Props = {
  backgroundColor?: string;
  children: ReactNode;
};

const Container: FC<Props> = ({ backgroundColor, children }) => {
  return (
    <Layout.Container backgroundColor={backgroundColor}>
      <Layout.MaxWidth>{children}</Layout.MaxWidth>
    </Layout.Container>
  );
};

export default Container;
