import Button from "@/components/Button";
import Image from "next/image";
import { RiShareForwardLine } from "react-icons/ri";

const EdcDirectorSection = () => {
  return (
    <section className="relative bg-[#E4F3D5] w-full flex flex-col lg:flex-row items-center justify-between py-12 px-4 sm:px-8 lg:py-16 lg:px-32 gap-6 lg:gap-4">
      {/* LEFT SIDE */}
      <div className="relative w-full lg:w-1/2 flex justify-center mb-1 -mt-6 sm:-mt-8 lg:mt-0 lg:-ml-20 scale-95">
        <div className="relative">
          <Image
            src="/edcDirectorAsset.svg"
            alt="EDC Director Asset"
            width={250}
            height={218.98}
            className="object-contain absolute -left-2 z-0 max-w-[200px] sm:max-w-[250px]"
            priority
          />
          <Image
            src="/edcDirector1.svg"
            alt="EDC Director"
            width={299}
            height={372}
            className="object-contain relative z-10 w-[220px] sm:w-[280px] lg:w-[299px]"
            priority
          />

          <div className="absolute z-10 flex gap-2 items-center justify-center -bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-[290px] border border-[#A4A4A4] text-[#001E1A] bg-[#E4F3D5] rounded-full px-3 py-1">
            <Image
              src="/edcLogo.svg"
              alt="EDC Director"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <p className="text-xs sm:text-sm text-center">
              Dr. Mrs Adubi Okin ( Director EDCABI )
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 space-y-6 bg-white p-6 sm:p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          About{" "}
          <span className="relative inline-block">
            EDC Abia
            <svg
              className="absolute left-0 right-0 -bottom-2 mx-auto"
              width="140"
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
        </h2>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
          <p>
            The Examinations Development Commission, Abia State (EDCABI) is the
            official government body responsible for managing and administering
            examinations for secondary schools in Abia State. We are committed
            to upholding credibility and providing an efficient, accessible
            platform for all.
          </p>
          <p>
            We also focus on improving digital infrastructure to support online
            registration, result checking, and candidate verification — making
            the examination process more accessible and user-friendly for all.
          </p>
        </div>

        <Button
          text="Learn About Us"
          bgColor="bg-[#182700]"
          hoverBgColor="hover:bg-white"
          hoverTextColor="hover:text-[#182700]"
          iconPosition="right"
          textColor="text-white"
          link="/about"
          border="border-[#182700]"
          rounded="rounded-full"
          icon={RiShareForwardLine}
          size="lg"
          className="w-full sm:w-2/5 mt-5"
        />
      </div>
    </section>
  );
};

export default EdcDirectorSection;
