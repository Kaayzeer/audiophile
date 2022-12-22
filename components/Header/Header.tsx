import React, { FC, ReactNode } from "react";
import * as H from "./styled";
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
  backImg?: boolean;
};

const Header: FC<Props> = ({ backImg, children }) => {
  return (
    <H.Container backImg={backImg}>
      <Navbar borderBottom />
      {children}
    </H.Container>
  );
};

export default Header;
