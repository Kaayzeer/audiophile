import { createGlobalStyle } from "styled-components";

export const theme = {
  maxWidth: "69.375rem",
  padding: "1.5rem",
  borderRadius: ".5rem",
  buttons: {
    primary: "#D87D4A",
    secondary: "##FFFFFF",
  },
  colors: {
    midBrown: "##D87D4A",
    someBlack: "##101010",
    greySilver: "#F1F1F1",
    snowWhite: "#FAFAFA",
    lighBrown: "#fbaf85",
    white: "#FFFFFF",
    black: "#000000",
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
    overLine: {
      fontSize: "0.875rem",
      textTransform: "uppercase",
      lineHeight: "19px",
      letterSpacing: "10px",
    },
    subTitle: {
      fontSize: "0.8125rem",
      textTransform: "uppercase",
      lineHeight: "25px",
      letterSpacing: "1px",
    },
    body: {
      fontSize: "0.9375rem",
      lineHeight: "15px",
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

.link {
    ${({ theme }: any) => theme.typography.p};
    text-transform: uppercase;
}

.overline {
    ${({ theme }: any) => theme.typography.overline};
}
.subTitle {
    ${({ theme }: any) => theme.typography.subTitle};
}

.flex-col {
  display: flex;
  flex-direction: column;
}

`;
