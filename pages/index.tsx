import { useState, useEffect } from "react";
import Link from "next/link";
import LayoutDefault from "containers/Layouts/Default";
import PageIndex from "containers/PageIndex";
import Section from "components/Section";

function Index() {
  return (
    <LayoutDefault>
      <PageIndex.Presentation />
      <PageIndex.Header />
      <PageIndex.FirstInfo />
      <PageIndex.MainInfo />
      <PageIndex.Partners />
      <PageIndex.Contact />
    </LayoutDefault>
  );
}

export default Index;
