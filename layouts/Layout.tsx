import React, { ReactNode, FC } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import { colors } from "../global/theme";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar backgroundColor={colors.black}>
        <h2>hallååå</h2>
      </Navbar>
      {children}
      <Footer />
    </>
  );
};

export default Layout;