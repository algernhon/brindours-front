import React from "react";
import Head from "next/head";

export interface PropsType {
  title?: string;
  description?: string;
}

// This is the <head> of the app
function Header({
  title = "Brin D'Ours - Micro-Crèche",
  description = "Site de la Micro-Crèche Brin D'ours",
}: PropsType) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        key="viewport"
      />
      <meta name="description" content={description} />
      <meta name="robots" content="noindex" />
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="icon"
        href="img/favicon-16x16.png"
        sizes="16x16"
        type="image/png"
        key="favicon"
      />
    </Head>
  );
}

export default Header;
