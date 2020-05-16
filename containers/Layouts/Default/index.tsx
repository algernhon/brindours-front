import React from "react";

import Theme from "styles";
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

type Props = {
  children?: React.ReactNode;
};

// This is the default layout of the Brin D'Ours website
function Default({ children = null }: Props) {
  return (
    <Theme>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Theme>
  );
}

export default Default;
