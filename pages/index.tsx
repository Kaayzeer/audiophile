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
import SpeakerMobile from "../public/assets/home/mobile/image-speaker-zx9.png";
import SpeakerTablet from "../public/assets/home/tablet/image-speaker-zx9.png";
import SpeakerLaptop from "../public/assets/home/desktop/image-speaker-zx9.png";
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
          mobileFlexColBetween
          laptopFlexRowCenter
          speakerImgSection
        >
          <L.ImageWrapper speakerImgWrapper>
            <L.ImageMobile
              src={SpeakerMobile}
              alt="standing-speaker"
              width={172}
              height={207}
            />
            <L.ImageTablet
              src={SpeakerTablet}
              alt="standing-speaker"
              width={197}
              height={237}
            />
            <L.ImageLaptop
              src={SpeakerLaptop}
              alt="standing-speaker"
              width={300}
              height={400}
            />
          </L.ImageWrapper>
          <L.ArticleWrapper color={colors.white}>
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
        <L.Section
          tableSpeaker
          mobileFlexRowStartCenter
          height={theme.height.medium}
        >
          <L.ArticleWrapper marginLeft>
            <L.ArticleHeaderFour>ZX7 SPEAKER</L.ArticleHeaderFour>
            <Button secondary>See Product</Button>
          </L.ArticleWrapper>
        </L.Section>
      </Container>
      <L.Divider size={theme.dividerSize.small} />
      <Container>
        <GridContainer gridOneMobile gridTwoTablet gap={theme.gap.secondary}>
          <L.ImageWrapper>
            <L.ImageYX1 />
          </L.ImageWrapper>
          <L.Section mobileFlexRowCenter backgroundColor={colors.greySilver}>
            <L.ArticleWrapper YX1Earphones>
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
          mobileFlexColReverse
          laptopFlexRowBetween
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
            <L.ImageBestGear />
          </L.ImageWrapper>
        </L.Section>
      </Container>
      <L.Divider size={theme.dividerSize.large} />
    </Layout>
  );
}
