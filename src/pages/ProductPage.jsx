import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/common/Footer";
import ProductsTable from "../components/ProductsTable";

function ProductPage() {
  return (
    <>
      <Topbar />
      <Header />
      <PageTitle
        title="Products"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "#" },
        ]}
      />
      <ProductsTable/>
      <Footer/>
    </>
  );
}

export default ProductPage;
