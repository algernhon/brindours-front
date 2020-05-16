import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalTheme from "./global";
import defaultTheme from "./default";

interface Props {
  children: React.ReactNode;
}

// This is the theme provider, new themes might be added later in the theme props
function Themes({ children }: Props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalTheme />
      {children}
    </ThemeProvider>
  );
}

export default Themes;
