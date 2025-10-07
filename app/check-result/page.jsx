"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";
import FAQ from "@/landingComponents/FAQ";
import GetDropDowns from "../../components/GetDropDowns";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FiArrowRightCircle } from "react-icons/fi";

export default function CheckResultPage() {
  const [formData, setFormData] = useState({
    examType: "",
    examYear: "",
    pin: "",
  });

  // LOADING PROPS
  const [isLoading, setIsLoading] = useState(false);
  const handleLoginClick = () => {
    setIsLoading(true);
    // Navigation will happen from the the link prop
    // Loading state will be reset when component unmounts or page changes

    // EXPECTED PROPS - for button loading state
    // loading = { isLoading };
    // loadingStateText = "Logging in...";
    // onClick = { handleLoginClick };
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.examType && formData.examYear && formData.pin) {
      alert("Result check submitted!");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header hideSchoolLogin={true} />
      <div className="py-8 md:py-12 mt-6 md:mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-4xl shadow-2xl p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6 md:mb-8">
              Students&apos;{" "}
              <span className="relative inline-block">
                Result
                <svg
                  className="absolute left-0 right-0 -bottom-2 mx-auto"
                  width="100"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M2 6C40 2 160 2 198 6"
                    stroke="#84cc16"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
              {/* IMAGE SECTION - Reduced height on mobile */}
              <div className="relative flex items-center justify-center bg-transparent rounded-lg w-full lg:w-1/2 min-h-[250px] sm:min-h-[350px] lg:min-h-[450px]">
                <img
                  src="/checkResultImage.svg"
                  alt="EDC Logo"
                  className="w-full h-auto max-w-[300px] max-h-[250px] sm:max-w-[400px] sm:max-h-[350px] lg:max-w-[450px] lg:max-h-[450px] object-contain"
                />
                <div className="flex gap-2 items-center justify-center bg-[#FFEECC] rounded-lg text-xs text-black px-3 py-2 absolute -bottom-2 left-4 sm:left-14">
                  <IoCheckmarkCircleOutline className="text-[#2B9B5B] w-4 h-4 sm:w-5 sm:h-5" />
                  <p className="text-xs sm:text-sm">PSLCE Result Available</p>
                </div>
              </div>

              {/* FORM SECTION */}
              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl border px-4 py-6 sm:px-6 md:px-8 w-full lg:w-[420px] min-h-[350px] flex items-center">
                <form className="w-full space-y-4" onSubmit={handleSubmit}>
                  {/* EXAM TYPE DROPDOWN */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Exam Type
                    </label>
                    <select
                      name="examType"
                      value={formData.examType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                      required
                    >
                      <option value="">Select Exam Type</option>
                      {GetDropDowns.getExamTypes().map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* EXAM YEAR DROPDOWN */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year
                    </label>
                    <select
                      name="examYear"
                      value={formData.examYear}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                      required
                    >
                      <option value="">Select Year</option>
                      {GetDropDowns.getExamYears().map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* PIN INPUT */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pin
                    </label>
                    <input
                      type="text"
                      name="pin"
                      value={formData.pin}
                      onChange={handleInputChange}
                      placeholder="Enter your PIN"
                      className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>

                  <Button
                    text="Check Result"
                    bgColor="bg-transparent"
                    hoverBgColor="hover:bg-[#7AC52D]"
                    hoverTextColor="hover:text-white"
                    textColor="text-[#182700]"
                    link="/admin/dashboard"
                    border="border-[#7AC52D]"
                    rounded="rounded-full"
                    icon={FiArrowRightCircle}
                    iconPosition="right"
                    size="lg"
                    loading={isLoading}
                    loadingStateText="Checking..."
                    onClick={handleLoginClick}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
}
