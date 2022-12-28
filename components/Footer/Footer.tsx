import Image from "next/image";
import React, { FC } from "react";
import { FooterContainer } from "../../layouts/Container";
import * as L from "../../layouts/styled";
import { theme } from "../../styles/theme";
import { FooterNav } from "../Header/Navbar";

import { colors } from "../../styles/colors";
import { socialMedias } from "../../constants/SocialMediaIcons";

type Props = {};

const Footer: FC<Props> = ({}) => {
  return (
    <FooterContainer flexColAround gap={theme.gap.tertiary}>
      <FooterNav />
      <L.FooterArticleWrapper color={colors.white}>
        <L.ArticleFooterBody>
          Audiophile is an all in one stop to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </L.ArticleFooterBody>
        <L.SocialMediaLaptopSection>{socialMedias}</L.SocialMediaLaptopSection>
      </L.FooterArticleWrapper>
      <L.FooterArticleWrapper color={colors.white}>
        <L.CopyRight>Copyright 2021. All Rights Reserved</L.CopyRight>
        <L.SocialMediaMobileSection>{socialMedias}</L.SocialMediaMobileSection>
      </L.FooterArticleWrapper>
    </FooterContainer>
  );
};

export default Footer;
