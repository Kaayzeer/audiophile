import React, { FC, Fragment, MutableRefObject } from "react";
import { ProductLinks, productLinks } from "../../constants/links";
import ProductLinkCards from "../UI-Components/ProductLinkCards/ProductLinkCards";
import * as S from "./styled";

type Props = {
  useThisRef: any;
};

const HamburgerMenu: FC<Props> = ({ useThisRef }) => {
  return (
    <S.HamburgerMenuBackDrop ref={useThisRef}>
      <S.HamburgerMenuWrapper>
        {productLinks.map((link: ProductLinks) => (
          <Fragment key={link.name}>
            <ProductLinkCards link={link} />
          </Fragment>
        ))}
      </S.HamburgerMenuWrapper>
    </S.HamburgerMenuBackDrop>
  );
};

export default HamburgerMenu;
