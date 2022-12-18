import React from "react";
import * as N from "./styled";

import Image from "next/image";
import Cart from "../../public/assets/shared/desktop/icon-cart.svg";
import Logo from "../../public/assets/shared/desktop/logo.svg";
import { links } from "../../constants/links";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <N.Nav>
      <N.LogoWrapper>
        <Image src={Logo} alt="page-logo" />
      </N.LogoWrapper>
      <N.LinkWrapper>
        {links.map((link, idx) => (
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

export default Navbar;
