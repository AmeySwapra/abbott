import React from "react";
import PageTitle from "../components/common/PageTitle";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AboutSection from "../components/AboutSection";


function AboutPage() {
  return (
    <>
      <Topbar />
      <Header />
      <PageTitle
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "#" },
        ]}
      />
      <AboutSection/>
      <Footer />
    </>
  );
}

export default AboutPage;
