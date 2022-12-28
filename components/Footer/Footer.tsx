import Image from "next/image";
import React from "react";
import { FooterContainer } from "../../layouts/Container";
import * as L from "../../layouts/styled";
import { theme } from "../../styles/theme";
import { FooterNav } from "../Header/Navbar";
import Facebook from "../../public/assets/shared/desktop/icon-facebook.svg";
import Instagram from "../../public/assets/shared/desktop/icon-instagram.svg";
import Twitter from "../../public/assets/shared/desktop/icon-twitter.svg";
import { colors } from "../../styles/colors";

type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterContainer flexColAround gap={theme.gap.tertiary}>
      <FooterNav />
      <L.FooterArticleWrapper color={colors.white}>
        <L.ArticleFooterBody>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </L.ArticleFooterBody>
        <L.SocialMediaLaptopSection>
          <Image src={Facebook} alt={""} />
          <Image src={Instagram} alt={""} />
          <Image src={Twitter} alt={""} />
        </L.SocialMediaLaptopSection>
      </L.FooterArticleWrapper>
      <L.FooterArticleWrapper color={colors.white}>
        <L.CopyRight>Copyright 2021. All Rights Reserved</L.CopyRight>
        <L.SocialMediaMobileSection>
          <Image src={Facebook} alt={""} />
          <Image src={Instagram} alt={""} />
          <Image src={Twitter} alt={""} />
        </L.SocialMediaMobileSection>
      </L.FooterArticleWrapper>
    </FooterContainer>
  );
};

export default Footer;
