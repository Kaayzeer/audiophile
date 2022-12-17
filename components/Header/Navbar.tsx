import React from "react";
import * as H from "./styled";

import Image from "next/image";
import Cart from "../../public/assets/shared/desktop/icon-cart.svg";
import Logo from "../../public/assets/shared/desktop/logo.svg";
import { links } from "../../constants/links";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <H.Nav>
      <H.LogoWrapper>
        <Image src={Logo} alt="page-logo" />
      </H.LogoWrapper>
      <H.LinkWrapper>
        {links.map((link, idx) => (
          <H.Links href={link} key={idx}>
            {link}
          </H.Links>
        ))}
      </H.LinkWrapper>
      <H.CartWrapper>
        <Image src={Cart} alt="cart-icon" />
      </H.CartWrapper>
    </H.Nav>
  );
};

export default Navbar;
