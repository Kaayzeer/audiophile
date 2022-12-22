import React, { FC } from "react";
import * as N from "./styled";

import Image from "next/image";
import Cart from "../../public/assets/shared/desktop/icon-cart.svg";
import Logo from "../../public/assets/shared/desktop/logo.svg";
import { navLinks } from "../../constants/links";

type Props = {
  borderBottom?: boolean;
  isCart?: boolean;
};

const Navbar: FC<Props> = ({ borderBottom, isCart }) => {
  return (
    <N.Nav borderBottom={borderBottom}>
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
      {!isCart && (
        <N.CartWrapper>
          <Image src={Cart} alt="cart-icon" />
        </N.CartWrapper>
      )}
    </N.Nav>
  );
};

export default Navbar;
