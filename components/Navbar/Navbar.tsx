import React, { FC, Fragment, ReactNode } from "react";
import * as Header from "./styled";
import Container from "../../layouts/Container";
import { colors } from "../../global/theme";
import Image from "next/image";
import Cart from "../../public/assets/shared/desktop/icon-cart.svg";
import Logo from "../../public/assets/shared/desktop/logo.svg";

type Props = {
  backgroundColor: string;
  children?: ReactNode;
};

const Navbar: FC<Props> = ({ backgroundColor, children }) => {
  const links: string[] = ["home", " headphones", "speakers", "earphones"];
  return (
    <Container backgroundColor={backgroundColor}>
      <Header.Container>
        <Header.Nav>
          <Header.LogoWrapper>
            <Image src={Logo} alt="cart-icon" />
          </Header.LogoWrapper>
          <Header.LinkWrapper>
            {links.map((link, idx) => (
              <Header.Links href={link} key={idx}>
                {link}
              </Header.Links>
            ))}
          </Header.LinkWrapper>
          <Header.CartWrapper>
            <Image src={Cart} alt="cart-icon" />
          </Header.CartWrapper>
        </Header.Nav>
        {children}
      </Header.Container>
    </Container>
  );
};

export default Navbar;
