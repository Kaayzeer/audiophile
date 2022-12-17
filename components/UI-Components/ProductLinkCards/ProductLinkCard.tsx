import React, { FC, ReactNode } from "react";
import * as P from "./styled";

type Props = {
  children: ReactNode;
  grid?: number;
};

const ProductLinkCard: FC<Props> = ({ children, grid }) => {
  return <P.CardWrapper grid={grid}>{children}</P.CardWrapper>;
};

export default ProductLinkCard;
