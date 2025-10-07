"use client";
import React from "react";

import HeroSection from "@/landingComponents/HeroSection";
import LandingLayout from "../landing-layout";
import LandingNews from "@/landingComponents/LandingNews";
import FAQ from "@/landingComponents/FAQ";
import Footer from "@/landingComponents/Footer";

export default function ExamsPage() {
  const [searchValue, setSearchValue] = React.useState("");
  const handleSearchChange = (val) => setSearchValue(val);
  const handleSearchSubmit = (val) => {
    // SEARCH LOGIC HERE
    console.log("Search submitted:", val);
  };

  return (
    <LandingLayout>
      <div className="">
        {/* WITH LINE BREAKS */}
        <HeroSection
          useDefaultLineBreaks={false}
          showLeftImage={false}
          h1Text="Latest News & Updates"
          useGreenAccentAfterFullStop={true}
          showSearchInput={true}
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
          // h2Text="Welcome to our portal"
          // paragraphText="Select your exam type below — then register online or verify your result instantly with your PIN"
          buttonProps={{
            text: "News",
            bgColor: "bg-white",
            hoverBgColor: "hover:bg-[#182700]",
            hoverTextColor: "hover:text-white",
            iconPosition: "right",
            textColor: "text-black",
            link: "/dashboard",
            border: "border-white",
            rounded: "rounded-full",
            size: "lg",
            className: "mt-5",
          }}
        />

        {/* WITHOUT LINE BREAKS */}
        {/* <HeroSection
          h1Text="First Line, Second Line"
          showRightLogo={false}
          buttonProps={{
            text: "Learn More",
            bgColor: "bg-blue-500",
          }}
        /> */}

        <LandingNews searchValue={searchValue} />
        <FAQ />
        <Footer />
      </div>
    </LandingLayout>
  );
}
