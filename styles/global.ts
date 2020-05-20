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
    greenLightTransition: string;
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

  body {
    background: ${({ theme }) => theme.colors.defaultBG};
    color: ${({ theme }) => theme.colors.defaultText};
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    letter-spacing: 0.1em;
    margin: 0;
    padding: 0;
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
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.pinkDark};
    font-family: 'Montserrat', sans-serif;
  }

  h3 {
    color: ${({ theme }) => theme.colors.green};
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalTheme;
