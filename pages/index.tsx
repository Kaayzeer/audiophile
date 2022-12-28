import Header from "../components/Header/Header";
import * as L from "../layouts/styled";
import {
  Container,
  GridContainer,
  ProductGridContainer,
} from "../layouts/Container";
import Layout from "../layouts/Layout";
import { colors } from "../styles/colors";
import Button from "../components/UI-Components/Buttons/Button";
import ProductLinkCards from "../components/UI-Components/ProductLinkCards/ProductLinkCards";
import InEar from "../public/assets/home/desktop/image-earphones-yx1.jpg";
import Speaker from "../public/assets/home/desktop/image-speaker-zx9.png";
import BestGear from "../public/assets/shared/desktop/image-best-gear.jpg";
import Image from "next/image";
import { theme } from "../styles/theme";
import { productLinks, ProductLinks } from "../constants/links";
import { Fragment } from "react";

export default function Home() {
  return (
    <Layout
      backgroundColor={colors.bodyBlack}
      header={
        <Container hero>
          <Header>
            <L.ArticleWrapper color={colors.white} alignSelf="start">
              <L.ArticleSubHeader>NEW PRODUCT</L.ArticleSubHeader>
              <L.ArticleHeader>XX99 Mark II Headphones</L.ArticleHeader>
              <L.ArticleBody>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </L.ArticleBody>
              <Button primary>See Products</Button>
            </L.ArticleWrapper>
          </Header>
        </Container>
      }
    >
      <L.Divider size={theme.dividerSize.large} />
      <Container>
        <ProductGridContainer responsive>
          {productLinks.map((link: ProductLinks) => (
            <Fragment key={link.name}>
              <ProductLinkCards link={link} />
            </Fragment>
          ))}
        </ProductGridContainer>
      </Container>
      <L.Divider size={theme.dividerSize.large} />
      <Container>
        <L.Section
          backgroundColor={colors.midBrown}
          height={theme.height.large}
          center
        >
          <L.ImageWrapper speakerImgSection>
            <Image
              src={Speaker}
              alt="standing-speaker"
              width={300}
              height={400}
            />
          </L.ImageWrapper>
          <L.ArticleWrapper>
            <L.ArticleHeader>ZX9 SPEAKER</L.ArticleHeader>
            <L.ArticleBody>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </L.ArticleBody>
            <Button fourthly>See Product</Button>
          </L.ArticleWrapper>
        </L.Section>
      </Container>
      <L.Divider size={theme.dividerSize.small} />
      <Container>
        <L.Section tableSpeaker startCenter height={theme.height.medium}>
          <L.ArticleWrapper marginLeft="6rem">
            <L.ArticleHeaderFour>ZX7 SPEAKER</L.ArticleHeaderFour>
            <Button secondary>See Product</Button>
          </L.ArticleWrapper>
        </L.Section>
      </Container>
      <L.Divider size={theme.dividerSize.small} />
      <Container>
        <GridContainer grid={2} gap={theme.gap.secondary}>
          <L.ImageWrapper>
            <Image src={InEar} alt="in-ear-earphones" />
          </L.ImageWrapper>
          <L.Section center backgroundColor={colors.greySilver}>
            <L.ArticleWrapper>
              <L.ArticleHeaderFour>YX1 EARPHONES</L.ArticleHeaderFour>
              <Button secondary>See Product</Button>
            </L.ArticleWrapper>
          </L.Section>
        </GridContainer>
      </Container>
      <L.Divider size={theme.dividerSize.large} />
      <Container>
        <L.Section
          backgroundColor={colors.white}
          height={theme.height.xLarge}
          flexRowBetween
        >
          <L.ArticleWrapper>
            <L.ArticleHeaderTwo>
              Bringing you the <span>best</span> audio gear
            </L.ArticleHeaderTwo>
            <L.ArticleBody>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </L.ArticleBody>
          </L.ArticleWrapper>
          <L.ImageWrapper>
            <Image
              src={BestGear}
              alt="best-gear-img"
              width={540}
              height={588}
            />
          </L.ImageWrapper>
        </L.Section>
      </Container>
      <L.Divider size={theme.dividerSize.large} />
    </Layout>
  );
}
