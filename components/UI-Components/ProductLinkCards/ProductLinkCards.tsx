import Image from "next/image";
import React, { FC, Fragment, ReactNode } from "react";
import { Button } from "../Buttons/styled";
import * as P from "./styled";
import IconRight from "../../../public/assets/shared/desktop/icon-arrow-right.svg";
import * as L from "../../../layouts/styled";
import { ProductLinks, productLinks } from "../../../constants/links";

type Props = {};

const ProductLinkCards: FC<Props> = ({}) => {
  return (
    <>
      {productLinks.map((link: ProductLinks) => (
        <P.CardWrapper key={link.name}>
          <L.ImageWrapper productLinkCardSection>
            <Image
              src={`/${link.img}`}
              alt={link.name}
              width={125}
              height={160}
            />
          </L.ImageWrapper>
          <Button tertiary>
            shop
            <Image src={IconRight} alt="right-icon" />
          </Button>
          <L.ArticleHeaderSix>{link.text}</L.ArticleHeaderSix>
        </P.CardWrapper>
      ))}
    </>
  );
};

export default ProductLinkCards;
