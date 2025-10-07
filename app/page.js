'use client'

import Header from '../components/Header'
import Card from '../components/Card'
import Button from '../components/Button'
import FAQ from '@/landingComponents/FAQ'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import OurServices from '@/components/OurServices'
import EdcDirectorSection from '@/landingComponents/EdcDirectorSection'
import LandingSlider from '@/landingComponents/LandingSlider'
import Footer from '@/landingComponents/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="pt-20 pb-12 lg:py-36 px-4 sm:px-6 lg:px-8 lg:mx-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left space-y-6">
              {/* LATEST BADGE */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#F2F7F5] text-black mx-auto lg:mx-0">
                Latest
                <span className="w-2 h-2 bg-green-500 rounded-full mx-2"></span>
                WAEC 2025 Registrations ongoing, to close...
                <ChevronRight className="ml-2 h-4 w-4" />
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Register for Exams & Check Results Online
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl font-light text-black leading-relaxed">
                Secure, fast and accessible for all students and schools in Abia State
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-1 justify-center lg:justify-start">
                <Button
                  text="Check Result"
                  bgColor="bg-[#7AC52D]"
                  hoverBgColor="hover:bg-white"
                  hoverTextColor="hover:text-black"
                  iconPosition="right"
                  textColor="text-black"
                  link="/check-result"
                  border="border-[#7AC52D]"
                  rounded="rounded-full "
                  // icon={CiSearch}
                  size="lg"
                  className="w-full sm:w-auto lg:w-2/5"
                />

                <Button
                  text="Register for Exam"
                  bgColor="bg-white"
                  hoverBgColor="hover:bg-[#7AC52D]"
                  hoverTextColor="hover:text-white"
                  iconPosition="right"
                  textColor="text-black"
                  link="/auth/sign-in"
                  border="border-[#7AC52D]"
                  rounded="rounded-full "
                  // icon={CiSearch}
                  size="lg"
                  className="w-full sm:w-auto lg:w-2/4"
                />
              </div>

              {/* Official Badge */}
              <div className="flex items-center justify-center lg:justify-start text-sm text-gray-600 pt-0">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-center lg:text-left">Official Portal of EDCABI | Ministry of Education, Abia State</span>
              </div>
            </div>

            {/* RIGHT CONTENT - svg Images */}
            <div className="flex justify-center lg:justify-start lg:ml-8 relative w-full h-full min-h-[300px] lg:order-last">
              <div className="relative w-full max-w-md lg:max-w-none">
                <Image 
                  src="/landingAll.svg" 
                  alt="Hero 1" 
                  width={550} 
                  height={550} 
                  className="w-full h-auto object-contain lg:absolute lg:-top-12 lg:left-8" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurServices />
      <EdcDirectorSection />
      <LandingSlider />
      <FAQ />
      <Footer />
    </div>
  )
}