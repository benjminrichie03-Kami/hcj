"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowRightCircle } from "react-icons/fi";
import { LGADropdown, SchoolDropdown } from "../../../components/GetDropDowns";
import Header from "@/components/Header";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Button from "@/components/Button";
import FAQ from "@/landingComponents/FAQ";
import toast, { Toaster } from "react-hot-toast";

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    lga: "",
    schoolCode: "",
    school: "",
    authCode: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // LOADING PROPS
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form first
    if (
      formData.lga &&
      formData.schoolCode &&
      formData.school &&
      formData.authCode
    ) {
      // Start loading state
      setIsLoading(true);
      
      // Simulate API call or processing
      setTimeout(() => {
        toast.success("Login successful! Redirecting to dashboard...");
        setIsLoading(false);
        // Navigate to dashboard
        router.push('/admin/dashboard');
      }, 2000);
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header hideSchoolLogin={true} />

      <div className="py-12 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-4xl shadow-2xl py-12 px-6 sm:px-8 lg:px-12">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
              School&apos;s{" "}
              <span className="relative inline-block">
                Login
                <svg
                  className="absolute left-0 right-0 -bottom-2 mx-auto"
                  width="90"
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

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* LEFT SIDE - Image (hidden on small screens) */}
              <div className="hidden lg:flex items-center justify-center relative w-full lg:w-1/2 min-h-[350px]">
                <img
                  src="/loginImage.svg"
                  alt="EDC Logo"
                  className="max-w-[350px] h-auto object-contain"
                />
                <div className="flex gap-2 items-center justify-center bg-[#FFEECC] rounded-lg text-xs text-black px-4 py-2 absolute -bottom-2 left-14">
                  <IoCheckmarkCircleOutline className="text-[#2B9B5B] w-5 h-5" />
                  <p>Student Registration</p>
                </div>
              </div>

              {/* RIGHT SIDE - Login Form */}
              <div className="bg-white rounded-2xl shadow-xl border px-6 sm:px-8 py-6 w-full lg:w-[420px] min-h-[350px] flex items-center">
                <div className="w-full space-y-4">
                  <LGADropdown
                    value={formData.lga}
                    onChange={handleInputChange}
                    required={true}
                    name="lga"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School Code
                    </label>
                    <input
                      type="text"
                      name="schoolCode"
                      value={formData.schoolCode}
                      onChange={handleInputChange}
                      placeholder="Enter School Code"
                      className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <SchoolDropdown
                    value={formData.school}
                    onChange={handleInputChange}
                    required={true}
                    name="school"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Auth Code
                    </label>
                    <input
                      type="password"
                      name="authCode"
                      value={formData.authCode}
                      onChange={handleInputChange}
                      placeholder="Enter Auth Code"
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <Button
                    text="School Login"
                    bgColor="bg-transparent"
                    hoverBgColor="hover:bg-[#7AC52D]"
                    hoverTextColor="hover:text-white"
                    textColor="text-[#182700]"
                    border="border-[#7AC52D]"
                    rounded="rounded-full"
                    icon={FiArrowRightCircle}
                    iconPosition="right"
                    size="lg"
                    loading={isLoading}
                    loadingStateText="Logging in..."
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
        
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
        }}
      />
    </div>
  );
}
