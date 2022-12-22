import Image from "next/image";
import React from "react";
import { Container } from "../../layouts/Container";
import * as L from "../../layouts/styled";
import { theme } from "../../styles/theme";
import Navbar from "../Header/Navbar";
import Facebook from "../../public/assets/shared/desktop/icon-facebook.svg";
import Instagram from "../../public/assets/shared/desktop/icon-instagram.svg";
import Twitter from "../../public/assets/shared/desktop/icon-twitter.svg";
import { colors } from "../../styles/colors";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Container height={theme.height.footer} flexColAround>
      <Navbar isCart />
      <L.FooterArticleWrapper color={colors.white}>
        <L.ArticleFooterBody>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </L.ArticleFooterBody>
        <L.SocialMediaSection>
          <Image src={Facebook} alt={""} />
          <Image src={Instagram} alt={""} />
          <Image src={Twitter} alt={""} />
        </L.SocialMediaSection>
      </L.FooterArticleWrapper>
      <L.CopyRight color={colors.white}>
        Copyright 2021. All Rights Reserved
      </L.CopyRight>
    </Container>
  );
};

export default Footer;
