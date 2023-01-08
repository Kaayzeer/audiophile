import Image from "next/image";
import { Fragment } from "react";

const SocialMediaImages = {
  FACEBOOK: "/assets/shared/desktop/icon-facebook.svg",
  INSTAGRAM: "/assets/shared/desktop/icon-instagram.svg",
  TWITTER: "/assets/shared/desktop/icon-twitter.svg",
} as const;

const SocialMediaNames = {
  FACEBOOK: "facebook",
  INSTAGRAM: "instagram",
  TWITTER: "twitter",
} as const;

const socialMediaLinks: Record<string, any> = [
  {
    img: SocialMediaImages.FACEBOOK,
    text: SocialMediaNames.FACEBOOK,
    width: 24,
    height: 24,
  },
  {
    img: SocialMediaImages.TWITTER,
    text: SocialMediaNames.TWITTER,
    width: 24,
    height: 19.5,
  },
  {
    img: SocialMediaImages.INSTAGRAM,
    text: SocialMediaNames.INSTAGRAM,
    width: 24,
    height: 24,
  },
];

type mediaLinks = {
  img: string;
  text: string;
  width: number;
  height: number;
};

export const socialMedias = socialMediaLinks.map((links: mediaLinks) => {
  return (
    <Fragment key={links.text}>
      <Image
        src={links.img}
        alt={links.text}
        width={links.width}
        height={links.height}
      />
    </Fragment>
  );
});
