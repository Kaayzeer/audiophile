import React, { ReactNode, FC } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
