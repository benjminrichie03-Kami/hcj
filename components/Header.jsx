import { FiArrowRightCircle } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";

export default function Header({ hideSchoolLogin = false }) {
  // ACTIVE TAB
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerRef = useRef(null);

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

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // CLOSE MOBILE MENU ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target) &&
        isMobileMenuOpen
      ) {
        closeMobileMenu();
      }
    };

    // EVENT LISTENERS WHEN MOBILE MENU IS OPEN
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    // CLEANUP EVENT LISTENERS
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header ref={headerRef} className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* LOGO - Left */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <Image
                src="/edcLogo.svg"
                alt="EDC Logo"
                width={50}
                height={50}
                className="mr-4"
              />
              <div className="flex flex-col w-full">
                <h1 className="text-xl font-bold text-gray-800">EDC-ABIA</h1>
                <p className="text-xs w-[200px] text-gray-600">
                  Official Exam Portal, Abia State
                </p>
              </div>
            </div>
          </Link>

          {/* NAV - Center */}
          <nav
            className={`hidden md:flex items-center space-x-8 ${
              hideSchoolLogin ? "" : "flex-1 justify-center"
            }`}
          >
            <Link
              href="/"
              className={`text-gray-700 hover:text-primary-600 font-medium pb-1 border-b-2 transition-colors duration-200 ${
                isActive("/")
                  ? "border-[#182700] text-[#182700]"
                  : "border-transparent"
              }`}
            >
              Home
            </Link>
            <Link
              href="/exams"
              className={`text-gray-700 hover:text-primary-600 font-medium pb-1 border-b-2 transition-colors duration-200 ${
                isActive("/exams")
                  ? "border-[#182700] text-[#182700]"
                  : "border-transparent"
              }`}
            >
              Exams
            </Link>
            <Link
              href="/about"
              className={`text-gray-700 hover:text-primary-600 font-medium pb-1 border-b-2 transition-colors duration-200 ${
                isActive("/about")
                  ? "border-[#182700] text-[#182700]"
                  : "border-transparent"
              }`}
            >
              About
            </Link>
            <Link
              href="/support"
              className={`text-gray-700 hover:text-primary-600 font-medium pb-1 border-b-2 transition-colors duration-200 ${
                isActive("/support")
                  ? "border-[#182700] text-[#182700]"
                  : "border-transparent"
              }`}
            >
              Support
            </Link>
          </nav>

          {/* Desktop Button Right, hidden if hideSchoolLogin */}
          {!hideSchoolLogin && (
            <div className="hidden md:flex items-center">
              <Button
                text="School Login"
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
                loading={isLoading}
                loadingStateText="Logging in..."
                onClick={handleLoginClick}
              />
            </div>
          )}

          {/* Mobile menu button - Always on the right */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-primary-600 p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              <Link
                href="/"
                className={`block text-gray-700 hover:text-primary-600 font-medium py-2 border-l-4 pl-4 transition-colors duration-200 ${
                  isActive("/")
                    ? "border-[#182700] text-[#182700] bg-gray-50"
                    : "border-transparent"
                }`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/exams"
                className={`block text-gray-700 hover:text-primary-600 font-medium py-2 border-l-4 pl-4 transition-colors duration-200 ${
                  isActive("/exams")
                    ? "border-[#182700] text-[#182700] bg-gray-50"
                    : "border-transparent"
                }`}
                onClick={closeMobileMenu}
              >
                Exams
              </Link>
              <Link
                href="/about"
                className={`block text-gray-700 hover:text-primary-600 font-medium py-2 border-l-4 pl-4 transition-colors duration-200 ${
                  isActive("/about")
                    ? "border-[#182700] text-[#182700] bg-gray-50"
                    : "border-transparent"
                }`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                href="/support"
                className={`block text-gray-700 hover:text-primary-600 font-medium py-2 border-l-4 pl-4 transition-colors duration-200 ${
                  isActive("/support")
                    ? "border-[#182700] text-[#182700] bg-gray-50"
                    : "border-transparent"
                }`}
                onClick={closeMobileMenu}
              >
                Support
              </Link>

              {/* Mobile Login Button */}
              {!hideSchoolLogin && (
                <div className="pt-4 border-t border-gray-200">
                  <Button
                    text="School Login"
                    bgColor="bg-transparent"
                    hoverBgColor="hover:bg-[#7AC52D]"
                    hoverTextColor="hover:text-white"
                    textColor="text-[#182700]"
                    link="/auth/sign-in"
                    border="border-[#7AC52D]"
                    rounded="rounded-full"
                    icon={FiArrowRightCircle}
                    iconPosition="right"
                    size="lg"
                    loading={isLoading}
                    loadingStateText="Logging in..."
                    onClick={handleLoginClick}
                  />
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
