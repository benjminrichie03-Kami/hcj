import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";

const HeroSection = ({
  h1Text = "Examinations Development Commission, Abia State",
  h2Text = "",
  paragraphText = "",
  useDefaultLineBreaks = true,
  showLeftImage = true,
  showRightLogo = true,
  useGreenAccentAfterComma = false,
  useGreenAccentAfterFullStop = false,
  rightLogoProps = {
    src: "/heroRightLogo.svg",
    width: 400,
    height: 400,
    alt: "Logo",
    className: "h-[130%] w-auto object-contain opacity-85",
  },
  buttonProps = {
    text: "",
    bgColor: "",
    hoverBgColor: "",
    hoverTextColor: "",
    iconPosition: "",
    textColor: "",
    link: "",
    border: "",
    rounded: "",
    size: "",
    className: "",
    icon: undefined,
  },
  showSearchInput = false,
  searchValue = "",
  onSearchChange = () => {},
  onSearchSubmit = () => {},
}) => {
  const renderH1Text = () => {
    if (Array.isArray(h1Text)) {
      return h1Text.map((line, index) => {
        // HANDLE COMMA CASE (first line green)
        if (useGreenAccentAfterComma && index === 0) {
          const commaIndex = line.indexOf(",");
          if (commaIndex !== -1) {
            const greenPart = line.substring(0, commaIndex + 1);
            const whitePart = line.substring(commaIndex + 1);
            return (
              <React.Fragment key={index}>
                <span className="text-[#7AC52D]">{greenPart}</span>
                <span className="text-white">{whitePart}</span>
                {index < h1Text.length - 1 && <br />}
              </React.Fragment>
            );
          }
        }

        // HANDLE FULL STOP CASE (second line green)
        if (useGreenAccentAfterFullStop && index === 1) {
          return (
            <React.Fragment key={index}>
              <span className="text-[#7AC52D]">{line}</span>
              {index < h1Text.length - 1 && <br />}
            </React.Fragment>
          );
        }

        // DEFAULT TEXT WHITE
        return (
          <React.Fragment key={index}>
            <span className="text-white">{line}</span>
            {index < h1Text.length - 1 && <br />}
          </React.Fragment>
        );
      });
    }

    if (typeof h1Text === "string") {
      if (useGreenAccentAfterComma) {
        const commaIndex = h1Text.indexOf(",");
        if (commaIndex !== -1) {
          const greenPart = h1Text.substring(0, commaIndex + 1);
          const whitePart = h1Text.substring(commaIndex + 1);
          return (
            <>
              <span className="text-[#7AC52D]">{greenPart}</span>
              <span className="text-white">{whitePart}</span>
            </>
          );
        }
      }

      if (useDefaultLineBreaks) {
        const words = h1Text.split(",");
        return words.map((word, index) => (
          <React.Fragment key={index}>
            <span className="text-white">{word.trim()}</span>
            {index < words.length - 1 && <br />}
          </React.Fragment>
        ));
      }
    }

    return <span className="text-white">{h1Text}</span>;
  };

  return (
    <div className="bg-[#182700] relative overflow-hidden mt-16">
      <div className={`flex items-center relative z-10 ${showLeftImage ? '' : 'justify-center'}`}>
        {/* LEFT CONTENT - Image */}
        {showLeftImage && (
          <div className="ml-16">
            <Image
              src="/edcDirector.svg"
              width={100}
              height={100}
              alt="Hero"
              className="h-64 w-full object-contain"
            />
          </div>
        )}

        {/* MIDDLE CONTENT */}
        <div className={`w-[800px] flex flex-col items-center justify-center px-8 text-center ${showLeftImage ? '-ml-32' : ''}`}>
          <Button
            text={buttonProps.text}
            bgColor={buttonProps.bgColor}
            hoverBgColor={buttonProps.hoverBgColor}
            hoverTextColor={buttonProps.hoverTextColor}
            iconPosition={buttonProps.iconPosition}
            textColor={buttonProps.textColor}
            link={buttonProps.link}
            border={buttonProps.border}
            rounded={buttonProps.rounded}
            icon={buttonProps.icon}
            size={buttonProps.size}
            className={`w-1/4 mb-5 ${buttonProps.className || ""}`}
          />

          {/* TITLE */}
          <div>
            <h1 className="text-5xl font-bold mb-3">{renderH1Text()}</h1>

            {h2Text && (
              <h2 className="text-2xl font-semibold text-white mb-2">
                {h2Text}
              </h2>
            )}

            {/* PARAGRAPH */}
            {paragraphText && (
              <p className="text-white text-base max-w-xl">{paragraphText}</p>
            )}
          </div>

          {showSearchInput && (
            <form
              className="relative flex items-center justify-center mb-5 w-full max-w-md mx-auto z-50 md:z-auto"
              onSubmit={(e) => {
                e.preventDefault();
                onSearchSubmit(searchValue);
              }}
            >
              <input
                type="text"
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search News"
                className="w-full h-10 sm:h-11 px-4 pr-12 rounded-full bg-white text-black placeholder-gray-400 focus:outline-none border border-[#90CF50] z-50 md:z-auto relative"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#90CF50] z-50 md:z-auto"
              >
                <FiSearch className="text-white w-5 h-5" />
              </button>
            </form>
          )}
        </div>

        {/* RIGHT CONTENT - Logo */}
        {showRightLogo && (
          <div className="absolute right-0 top-0 h-full">
            <Image
              src={rightLogoProps.src}
              width={rightLogoProps.width}
              height={rightLogoProps.height}
              alt={rightLogoProps.alt}
              className={rightLogoProps.className}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
