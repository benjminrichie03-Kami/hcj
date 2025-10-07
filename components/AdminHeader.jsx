"use client";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";
import Button from "./Button";


const AdminHeader = ({ onMobileMenuToggle }) => {

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left side - Mobile menu button and Logo */}
        <div className="flex items-center">
          {/* Mobile sidebar toggle button */}
          <button
            onClick={onMobileMenuToggle}
            className="md:hidden mr-4 text-gray-700 hover:text-primary-600 p-2"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Image
            src="/edcLogo.svg"
            alt="EDC Logo"
            width={50}
            height={50}
            className="mr-4"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-800">EDC-ABIA</h1>
            <p className="text-sm text-gray-600">
              Official Exam Portal, Abia State
            </p>
          </div>
        </div>

        {/* Desktop - Right side - Welcome message and Logout */}
        <div className="hidden md:flex items-center gap-4">
          <p className="text-gray-700">Welcome {"Admin"}</p>
          <Button
            text="Log Out"
            bgColor="bg-transparent"
            hoverBgColor="hover:bg-[#7AC52D]"
            hoverTextColor="hover:text-white"
            textColor="text-[#182700]"
            link="/auth/sign-in"
            border="border-[#7AC52D]"
            rounded="rounded-full "
            icon={FiArrowRightCircle}
            iconPosition="right"
            size="lg"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
