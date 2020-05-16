import React from "react";
import Head from "next/head";

export interface PropsType {
  title?: string;
  description?: string;
  lang?: "fr" | "en";
}

// This is the <head> of the app
function Header({
  title = "Brin D'Ours - Micro-Crèche",
  description = "Site de la Micro-Crèche Brin D'ours",
  lang = "fr",
}: PropsType) {
  return (
    <html lang={lang}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          key="viewport"
        />
        <meta name="description" content={description} />
        <title>{title}</title>
        <link
          rel="icon"
          href="img/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
          key="favicon"
        />
      </Head>
    </html>
  );
}

export default Header;
