import React, { FC, Fragment } from "react";
import * as N from "./styled";

import Image from "next/image";
import Cart from "../../public/assets/shared/desktop/icon-cart.svg";
import Logo from "../../public/assets/shared/desktop/logo.svg";
import Hamburger from "../../public/assets/shared/tablet/icon-hamburger.svg";
import { navLinks } from "../../constants/links";

type Props = {
  borderBottom?: boolean;
  isFooter?: boolean;
};

export const Navbar: FC<Props> = ({ borderBottom, isFooter }) => {
  return (
    <N.Nav borderBottom={borderBottom}>
      {!isFooter && (
        <N.HamburgerWrapper>
          <Image src={Hamburger} alt="page-logo" />
        </N.HamburgerWrapper>
      )}
      <N.LogoWrapper>
        <Image src={Logo} alt="page-logo" />
      </N.LogoWrapper>

      <N.LinkWrapper>
        {navLinks.map((link, idx) => (
          <N.Links href={link} key={idx}>
            {link}
          </N.Links>
        ))}
      </N.LinkWrapper>

      <N.CartWrapper>
        <Image src={Cart} alt="cart-icon" />
      </N.CartWrapper>
    </N.Nav>
  );
};

export const FooterNav: FC<Props> = ({ borderBottom, isFooter }) => {
  return (
    <N.FooterNav center>
      <N.LogoWrapper>
        <Image src={Logo} alt="page-logo" />
      </N.LogoWrapper>

      <N.FooterLinkWrapper>
        {navLinks.map((link, idx) => (
          <N.Links href={link} key={idx}>
            {link}
          </N.Links>
        ))}
      </N.FooterLinkWrapper>
    </N.FooterNav>
  );
};
