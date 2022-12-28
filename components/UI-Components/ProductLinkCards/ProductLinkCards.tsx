import Image from "next/image";
import React, { FC } from "react";
import { Button } from "../Buttons/styled";
import * as P from "./styled";
import IconRight from "../../../public/assets/shared/desktop/icon-arrow-right.svg";
import * as L from "../../../layouts/styled";
import { ProductLinks } from "../../../constants/links";
import { GridContainer } from "../../../layouts/Container";
import { theme } from "../../../styles/theme";
import { device } from "../../../styles/breakpoints";

type Props = {
  link: ProductLinks;
};

const ProductLinkCards: FC<Props> = ({ link }) => {
  return (
    <P.CardWrapper>
      <L.ImageWrapper productLinkCardSection>
        <Image
          src={`/${link.img}`}
          alt={link.name}
          width={link.width}
          height={link.height}
          sizes={`${device.laptop} 100vw`}
        />
      </L.ImageWrapper>
      <Button tertiary>
        shop
        <Image src={IconRight} alt="right-icon" />
      </Button>
      <L.ArticleHeaderSix>{link.text}</L.ArticleHeaderSix>
    </P.CardWrapper>
  );
};

export default ProductLinkCards;
