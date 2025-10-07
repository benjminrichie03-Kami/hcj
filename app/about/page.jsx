"use client";

import AboutComponent from "@/landingComponents/AboutComponent";
import LandingLayout from "../landing-layout";
import HeroSection from "@/landingComponents/HeroSection";
import AboutHeroBottom from "@/landingComponents/AboutHeroBottom";
import Footer from "@/landingComponents/Footer";

export default function AboutPage() {
  return (
    <LandingLayout>
      <div className="">
        <HeroSection
          buttonProps={{
            text: "Check Result",
            bgColor: "bg-white",
            hoverBgColor: "hover:bg-[#182700]",
            hoverTextColor: "hover:text-white",
            iconPosition: "right",
            textColor: "text-black",
            link: "/dashboard",
            border: "border-white",
            rounded: "rounded-full",
            size: "lg",
            className: "w-full md:w-auto mt-5",
          }}
        />
        <AboutHeroBottom />

        <AboutComponent />
        <Footer />
      </div>
    </LandingLayout>
  );
}
