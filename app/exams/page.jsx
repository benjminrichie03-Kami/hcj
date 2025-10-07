'use client'

import HeroSection from '@/landingComponents/HeroSection'
import LandingLayout from '../landing-layout'
import AllExams from '@/landingComponents/AllExams'
import FAQ from '@/landingComponents/FAQ'
import Footer from '@/landingComponents/Footer'

export default function ExamsPage() {
  return (
    <LandingLayout>
      <div className="">
        {/* WITH LINE BREAKS */}
        <HeroSection
          useDefaultLineBreaks={false}
          showLeftImage={false}
          h1Text={["Choose Your Exam.", "Register or Check Results"]}
          useGreenAccentAfterFullStop={true}
          // h2Text="Welcome to our portal"
          paragraphText="Select your exam type below — then register online or verify your result instantly with your PIN"
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

        <AllExams />
      <FAQ />
      <Footer />
      </div>
    </LandingLayout>
  )
}