import Image from "next/image";
import Button from "../components/Button";
import { useState } from "react";

export default function Footer() {
  const [emailMsg, setEmailMsg] = useState("");

  const handleSendEmail = () => {
    window.location.href = `mailto:benjminrichie@gmail.com?body=${encodeURIComponent(
      emailMsg
    )}`;
  };

  return (
    <footer
      className="w-full flex flex-col bg-[#E4F3D538] px-6 sm:px-10 lg:px-[105px] items-center justify-center relative py-12"
      style={{ backgroundColor: "#E4F3D538" }}
    >
      <div className="flex flex-col lg:flex-row w-full h-full gap-10">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/3 flex flex-col justify-start items-start">
          <div className="flex items-center gap-2">
            <Image src="/edcLogo.svg" alt="EDC Logo" width={50} height={50} />
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold text-black">
                EDC Abia
              </h1>
              <p className="text-[#777777] text-xs sm:text-sm">
                Official Exam Portal, Abia State
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-2/3 flex flex-wrap gap-8 lg:gap-6 items-start">
          {/* SITE LINK */}
          <div className="flex flex-col gap-2 min-w-[120px]">
            <h2 className="text-black text-lg font-semibold mb-2">Site Link</h2>
            <a href="/" className="text-[#5E5E5E] text-sm">
              Home
            </a>
            <a href="/check-result" className="text-[#5E5E5E] text-sm">
              Result
            </a>
            <a href="/auth/sign-in" className="text-[#5E5E5E] text-sm">
              Registration
            </a>
          </div>

          {/* SUPPORT */}
          <div className="flex flex-col gap-2 min-w-[120px]">
            <h2 className="text-black text-lg font-semibold mb-2">Support</h2>
            <a href="/faq" className="text-[#5E5E5E] text-sm">
              FAQ
            </a>
            <a href="/support" className="text-[#5E5E5E] text-sm">
              Contact Us
            </a>
            <a href="/terms" className="text-[#5E5E5E] text-sm">
              Terms & Conditions
            </a>
            <a href="/privacy" className="text-[#5E5E5E] text-sm">
              Privacy Policy
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex flex-col gap-2 min-w-[120px]">
            <h2 className="text-black text-lg font-semibold mb-2">
              Social Links
            </h2>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5E5E5E] text-sm"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5E5E5E] text-sm"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5E5E5E] text-sm"
            >
              Twitter
            </a>
          </div>

          {/* SEND US MAIL */}
          <div className="flex flex-col gap-3 min-w-full sm:min-w-[280px]">
            <h2 className="text-black text-lg font-semibold mb-2">
              Send Us Mail
            </h2>
            <p className="text-[#5E5E5E] text-sm">Type Here</p>
            <input
              type="text"
              value={emailMsg}
              onChange={(e) => setEmailMsg(e.target.value)}
              className="mb-2 p-2 border text-black bg-white border-gray-300 rounded placeholder-gray-400 w-full"
              placeholder="Your message..."
            />
            <div onClick={handleSendEmail} className="w-full sm:w-2/4">
              <Button
                text="Send Email"
                bgColor="bg-[#001E1A]"
                hoverBgColor="hover:bg-white"
                hoverTextColor="hover:text-[#001E1A]"
                iconPosition="right"
                textColor="text-white"
                link="#"
                border="border-[#001E1A]"
                rounded="rounded-full"
                size="lg"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-10 w-full h-[1px] bg-[#182700]" />
     
      <p className="mt-4 text-center text-[#5E5E5E] text-xs sm:text-sm font-semibold">
        EDC ABIA {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
}
