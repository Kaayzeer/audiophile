import React, { FC, ReactNode } from "react";
import * as Layout from "./Layout";

type Props = {
  h1?: string;
  h2?: string;
  children: ReactNode;
};

const Article: FC<Props> = ({ h1, h2, children }) => {
  return (
    <Layout.ArticleWrapper h1={h1} h2={h2}>
      {children}
    </Layout.ArticleWrapper>
  );
};

export default Article;
