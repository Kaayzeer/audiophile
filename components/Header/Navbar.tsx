import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import * as N from "./styled";

import Image from "next/image";
import Cart from "../../public/assets/shared/desktop/icon-cart.svg";
import Logo from "../../public/assets/shared/desktop/logo.svg";
import Hamburger from "../../public/assets/shared/tablet/icon-hamburger.svg";
import Close from "../../public/assets/shared/tablet/close-icon.svg";
import { navLinks } from "../../constants/links";
import HamburgerMenu from "./HamburgerMenu";

type Props = {};

export const Navbar: FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const showNav = () => {
    if (ref.current) {
      ref.current.style.transform = "translateX(0)";
      document.body.style.overflow = "hidden";
      setIsOpen(true);
    }
  };

  const closeNav = () => {
    if (ref.current) {
      ref.current.style.transform = "translateX(100%)";
      document.body.style.overflow = "visible";
      setIsOpen(false);
    }
  };

  return (
    <N.Nav>
      <N.HamburgerWrapper>
        {isOpen ? (
          <Image src={Close} alt="close-icon" onClick={closeNav} />
        ) : (
          <Image src={Hamburger} alt="hamburger-menu" onClick={showNav} />
        )}
      </N.HamburgerWrapper>
      <HamburgerMenu useThisRef={ref} />
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

export const FooterNav: FC<Props> = ({}) => {
  return (
    <N.FooterNav>
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
