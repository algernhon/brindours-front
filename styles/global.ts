import { createGlobalStyle } from "styled-components";

// This is the main colors of the app
/*
  defaultBG: Color of the background
  green: Default text color

*/
export interface ThemeType {
  colors: {
    defaultBG: string;
    defaultText: string;
    greenLight: string;
    greenLightDarker: string;
    green: string;
    pinkDark: string;
    pinkLight: string;
    pink: string;
  };
  sizes: {
    borderRadius: string;
    separator: string;
    widthDefault: string;
  };
  shadow: {
    default: string;
    hover: string;
  };
}

// This is global theme, this shouldn't be modified unless it's strictly necessary /!\
// font-family: 'Montserrat', sans-serif;
const GlobalTheme = createGlobalStyle<{ theme: ThemeType }>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'TextbookNew';
    src: url(/fonts/TextbookNew-Light.woff) format('woff');
    src: url(/fonts/TextbookNew-Regular.woff) format('woff');
  }

  @font-face {
    font-family: 'Soin';
    src: url(/fonts/Soin-Light.otf) format('opentype');
  }


  body {
    background: ${({ theme }) => theme.colors.defaultBG};
    color: ${({ theme }) => theme.colors.defaultText};
    display: flex;
    flex-direction: column;
    font-family: 'Soin', sans-serif;
    font-weight: 400;
    letter-spacing: 0.1em;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.25s linear;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%; 
    line-height: 1.15;
    margin: 0; 
  }

  
  button,
  input {
    overflow: visible;
    letter-spacing: 0.1em;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  a {
    color: ${({ theme }) => theme.colors.green};
    text-decoration: none;
  }

  h1 {
    color: ${({ theme }) => theme.colors.green};
    font-family: 'TextbookNew', sans-serif;
    font-size: 52px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.pinkDark};
    font-family: 'TextbookNew', sans-serif;
  }

  h3 {
    color: ${({ theme }) => theme.colors.green};
    font-family: 'TextbookNew', sans-serif;
  }
`;

export default GlobalTheme;
