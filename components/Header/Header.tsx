import React, { FC, ReactNode } from "react";
import * as H from "./styled";
import { Navbar } from "./Navbar";

type Props = {
  children?: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  return (
    <H.Container>
      <Navbar />
      {children}
    </H.Container>
  );
};

export default Header;
