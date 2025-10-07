"use client";

import HeroSection from "@/landingComponents/HeroSection";
import LandingLayout from "../landing-layout";
import ContactSupport from "@/landingComponents/ContactSupport";
import FAQ from "@/landingComponents/FAQ";
import Footer from "@/landingComponents/Footer";

export default function SupportPage() {
  return (
    <LandingLayout>
      <div className="">
        {/* WITH LINE BREAKS */}
        <HeroSection
          useDefaultLineBreaks={false}
          showLeftImage={false}
          h1Text={["Your Questions, Answered", "- By EDCABI"]}
          useGreenAccentAfterComma={true}
          h2Text="Welcome to our portal"
          paragraphText="Whether you’re checking results, registering for exams, or managing school records — we’ve got you covered."
          buttonProps={{
            text: "Contact Us",
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

        {/* WITHOUT LINE BREAKS */}
        {/* <HeroSection
          h1Text="First Line, Second Line"
          showRightLogo={false}
          buttonProps={{
            text: "Learn More",
            bgColor: "bg-blue-500",
          }}
        /> */}

        <ContactSupport />
      <FAQ />
      <Footer />
      </div>
    </LandingLayout>
  );
}
