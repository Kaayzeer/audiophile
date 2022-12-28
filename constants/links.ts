const Links = {
  HOME: "home",
  HEADPHONES: "headphones",
  SPEAKERS: "speakers",
  EARPHONES: "earphones",
} as const;

const productImages = {
  HEADPHONES: "assets/shared/desktop/image-category-thumbnail-headPhones.png",
  SPEAKERS: "assets/shared/desktop/image-category-thumbnail-speakers.png",
  EARPHONES: "assets/shared/desktop/image-category-thumbnail-earphones.png",
} as const;

const productLinkNames = {
  HEADPHONES: "headphones",
  SPEAKERS: "speakers",
  EARPHONES: "earphones",
} as const;

export const navLinks: string[] = [
  Links.HOME,
  Links.HEADPHONES,
  Links.SPEAKERS,
  Links.EARPHONES,
];

export const productLinks: Record<string, any> = [
  {
    img: productImages.HEADPHONES,
    name: productLinkNames.HEADPHONES,
    text: productLinkNames.HEADPHONES,
    width: 79.92,
    height: 104,
  },
  {
    img: productImages.SPEAKERS,
    name: productLinkNames.SPEAKERS,
    text: productLinkNames.SPEAKERS,
    width: 84.04,
    height: 101,
  },
  {
    img: productImages.EARPHONES,
    name: productLinkNames.EARPHONES,
    text: productLinkNames.EARPHONES,
    width: 103,
    height: 104,
  },
];

export type ProductLinks = {
  name: string;
  img: string;
  text: string;
  width: number;
  height: number;
};
