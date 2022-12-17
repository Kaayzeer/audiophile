import Header from "../components/Header/Header";
import * as L from "../layouts/styled";
import { Container, GridContainer } from "../layouts/Container";
import Layout from "../layouts/Layout";
import { colors } from "../styles/colors";
import Button from "../components/UI-Components/Buttons/Button";
import ProductLinkCard from "../components/UI-Components/ProductLinkCards/ProductLinkCard";
import EarPhones from "../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import Speakers from "../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import HeadPhones from "../public/assets/shared/desktop/image-category-thumbnail-headPhones.png";
import IconRight from "../public/assets/shared/desktop/icon-arrow-right.svg";
import Image from "next/image";

export default function Home() {
  return (
    <Layout
      backgroundColor={colors.bodyBlack}
      header={
        <Container hero backImg>
          <Header>
            <L.ArticleWrapper>
              <L.ArticleSubHeader className="overline">
                NEW PRODUCT
              </L.ArticleSubHeader>
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
      <L.Divider size="10rem" />
      <Container>
        <GridContainer grid={3} gap="1.875rem">
          <ProductLinkCard>
            <L.ImageWrapper marginTop="-5rem">
              <Image
                src={HeadPhones}
                alt="headphones"
                width={123}
                height={160}
              />
            </L.ImageWrapper>
            <Button tertiary>
              shop
              <Image src={IconRight} alt="right-icon" />
            </Button>
            <L.ArticleHeaderSix>headphones</L.ArticleHeaderSix>
          </ProductLinkCard>
          <ProductLinkCard>
            <L.ImageWrapper marginTop="-4rem">
              <Image src={Speakers} alt="speakers" width={121} height={146} />
            </L.ImageWrapper>
            <Button tertiary>
              shop
              <Image src={IconRight} alt="right-icon" />
            </Button>
            <L.ArticleHeaderSix>speakers</L.ArticleHeaderSix>
          </ProductLinkCard>
          <ProductLinkCard>
            <L.ImageWrapper marginTop="-4rem">
              <Image src={EarPhones} alt="earphones" width={125} height={126} />
            </L.ImageWrapper>
            <Button tertiary>
              shop
              <Image src={IconRight} alt="right-icon" />
            </Button>
            <L.ArticleHeaderSix>earphones</L.ArticleHeaderSix>
          </ProductLinkCard>
        </GridContainer>
      </Container>
    </Layout>
  );
}
