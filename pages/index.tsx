import LayoutDefault from "containers/Layouts/Default";
import PageIndex from "containers/PageIndex";

function Index() {
  return (
    <LayoutDefault>
      <PageIndex.Presentation />
      <PageIndex.Header />
      <PageIndex.Info />
      <PageIndex.Open />
      <PageIndex.Info />
      <PageIndex.MainInfo />
      <PageIndex.Partners />
      <PageIndex.Contact />
    </LayoutDefault>
  );
}

export default Index;
