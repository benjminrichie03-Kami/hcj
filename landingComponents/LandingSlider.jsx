'use client'

import React, { useState, useEffect } from 'react'
import { PrinterIcon, FileText, PencilIcon } from 'lucide-react'
import { RiShareForwardLine } from 'react-icons/ri'
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5"
import Button from '../components/Button'

const LandingSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState('next')
  const [isAnimating, setIsAnimating] = useState(false)

  const slides = [
    { image: '/slider1.svg', title: 'PSLCE', description: '2025/2026 Placement School Leaving Certificate Examination Registration Begins' },
    { image: '/slider2.svg', title: 'BECE', description: 'The result for BECE 23/24 is now available for checks......' },
    { image: '/slider3.svg', title: 'PSCLE', description: 'Preparation for the Biggest Examination of the state is ongoing as ....' }
  ]

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection('next')
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection('prev')
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    return () => setIsAnimating(false)
  }, [currentSlide])

  return (
    <div className="w-full py-8">
      {/* TOP SECTION */}
      <div className="container mx-auto mb-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-stretch border border-[#7AC52D] rounded-xl py-4 px-2 w-full md:w-4/6 mx-auto gap-6 md:gap-0">
          
          {/* PRINT */}
          <div className="flex-1 flex flex-col items-start text-start px-4">
            <PrinterIcon className="w-8 h-8 text-[#6DD130] mb-4" />
            <h1 className="text-xl md:text-2xl text-black font-bold mb-2">Print Slip</h1>
            <p className="text-gray-600 text-sm md:text-base">Print & Edit your exam slip with ease</p>
          </div>

          {/* DIVIDER (hidden on mobile) */}
          <div className="hidden md:block w-px h-32 bg-gray-300"></div>

          {/* RESULT */}
          <div className="flex-1 flex flex-col items-start text-start px-4">
            <FileText className="w-8 h-8 text-[#6DD130] mb-4" />
            <h1 className="text-xl md:text-2xl text-black font-bold mb-2">Result</h1>
            <p className="text-gray-600 text-sm md:text-base">Access your result with ease</p>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:block w-px h-32 bg-gray-300"></div>

          {/* EXAM */}
          <div className="flex-1 flex flex-col items-start text-start px-4">
            <PencilIcon className="w-8 h-8 text-[#6DD130] mb-4" />
            <h1 className="text-xl md:text-2xl text-black font-bold mb-2">Exam</h1>
            <p className="text-gray-600 text-sm md:text-base">Register for exam with ease</p>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="container mx-auto relative px-4">
        <div className="flex flex-col md:flex-row items-center bg-[#F1F1F1] rounded-2xl overflow-hidden w-full md:w-[1081px] h-auto md:h-[327px] mx-auto">

          {/* IMAGE SECTION */}
          <div className="w-full md:w-1/3">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-48 md:h-[327px] object-cover"
            />
          </div>

          {/* TEXT SECTION */}
          <div className="w-full md:w-2/3 p-6 md:p-8 text-center md:text-left">
            <span className="text-xs md:text-sm text-gray-500 mb-2 block">Exam News</span>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 text-[#000000] inline-block pb-1"
              style={{
                borderBottom: '4px solid',
                borderImage: slides[currentSlide].title === 'PSLCE'
                  ? 'linear-gradient(to right, #7AC52D, #3B5F16) 1'
                  : slides[currentSlide].title === 'BECE'
                  ? 'linear-gradient(to right, #2D5DC5, #0F8CE9) 1'
                  : 'linear-gradient(to right, #FF6767, #993E3E) 1'
              }}
            >
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg md:text-2xl lg:text-4xl font-bold mb-4 text-[#182700]">
              {slides[currentSlide].description}
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                text="Read More"
                bgColor="bg-white"
                hoverBgColor="hover:bg-[#7AC52D]"
                hoverTextColor="hover:text-white"
                iconPosition="right"
                textColor="text-black"
                link="/news"
                border="border-[#7AC52D]"
                rounded="rounded-full"
                icon={RiShareForwardLine}
                size="lg"
                className="w-1/2 md:w-2/6 mt-3 md:mt-5"
              />
            </div>
          </div>

          {/* NAVIGATION ARROWS */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-20 top-24 md:top-1/2 transform -translate-y-1/2 bg-[#7AC52D] p-2 rounded-full shadow-lg"
          >
            <IoArrowBackOutline className="text-black w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-20 top-24 md:top-1/2 transform -translate-y-1/2 bg-[#7AC52D] p-2 rounded-full shadow-lg"
          >
            <IoArrowForwardOutline className="text-black w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingSlider
