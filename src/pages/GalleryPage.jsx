import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import PageTitle from "../components/common/PageTitle";
import GallerySection from "../components/GallerySection";
import Footer from "../components/common/Footer";

function GalleryPage() {
  return (
    <>
      <Topbar />
      <Header />
      <PageTitle
        title="Gallety"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "#" },
        ]}
      />
      <GallerySection/>
      <Footer/>
    </>
  );
}

export default GalleryPage;
