import { NodeNextRequest } from "next/dist/server/base-http/node";
import { MiddlewareNotFoundError } from "next/dist/shared/lib/utils";
import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const theme = {
  maxWidth: {
    container: "90rem",
    wrapper: "69.375rem",
  },
  dividerSize: {
    small: "3rem",
    large: "10rem",
  },
  padding: "0rem 1.5rem",
  borderRadius: ".5rem",
  height: {
    medium: "20rem",
    footer: "22.8125rem",
    large: "35rem",
    xLarge: "36.75rem",
  },
  gap: {
    small: ".5rem",
    medium: "1rem",
    large: "1.875rem",
    primary: "1.5rem",
    secondary: "2rem",
  },
  buttons: {
    primary: {
      width: "min(100%, 15.9375rem)",
      padding: "0.9375rem 1.875rem",
      backgroundColor: colors.midBrown,
      color: colors.white,
      border: "none",
    },
    secondary: {
      width: "min(100%, 15.9375rem)",
      padding: "0.9375rem 1.875rem",
      backgroundColor: colors.transparent,
      border: `1px solid  ${colors.black}`,
    },
    tertiary: {
      width: "auto",
      backgroundColor: colors.transparent,
      border: "none",
    },
    fourthly: {
      width: "min(100%, 15.9375rem)",
      padding: "0.9375rem 1.875rem",
      backgroundColor: colors.black,
      color: colors.white,
      border: "none",
    },
  },
  colors: {
    midBrown: colors.midBrown,
    someBlack: colors.someBlack,
    greySilver: colors.greySilver,
    snowWhite: colors.snowWhite,
    lightBrown: colors.lightBrown,
    bodyBlack: colors.bodyBlack,
    white: colors.white,
    black: colors.black,
  },
  typography: {
    h1: {
      fontSize: "3.5rem",
      textTransform: "uppercase",
      lineHeight: "58px",
      letterSpacing: "2px",
    },
    h2: {
      fontSize: "2.5rem",
      textTransform: "uppercase",
      lineHeight: "44px",
      letterSpacing: "1.5px",
    },
    h3: {
      fontSize: "2rem",
      textTransform: "uppercase",
      lineHeight: "36px",
      letterSpacing: "1.15px",
    },
    h4: {
      fontSize: "1.75rem",
      textTransform: "uppercase",
      lineHeight: "38px",
      letterSpacing: "2px",
    },
    h5: {
      fontSize: "1.5rem",
      textTransform: "uppercase",
      lineHeight: "33px",
      letterSpacing: "1.7px",
    },
    h6: {
      fontSize: "1.125rem",
      textTransform: "uppercase",
      lineHeight: "24px",
      letterSpacing: "1.3px",
    },
    body: {
      fontSize: "0.9375rem",
      lineHeight: "25px",
    },
  },
};

export const GlobalStyles = createGlobalStyle`

h1 {
  ${({ theme }: any) => theme.typography.h1};
}
h2 {
  ${({ theme }: any) => theme.typography.h2}
}
h3 {
  ${({ theme }: any) => theme.typography.h3};
}
h4 {
  ${({ theme }: any) => theme.typography.h4};
}
h5 {
  ${({ theme }: any) => theme.typography.h5};
}
h6 {
  ${({ theme }: any) => theme.typography.h6};
}

p{ 
${({ theme }: any) => theme.typography.body};
}

a {
  ${({ theme }: any) => theme.typography.body};
  text-transform: uppercase;
}
`;
