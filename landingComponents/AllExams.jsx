import React from "react";
import Button from "../components/Button";

const exams = [
  {
    image: "/examPSLCE.svg",
    label: "PSCLE",
    title: "Primary School Leaving Certificate Examination",
    description: "The official exit exam for Primary 6 pupils in Abia State.",
  },
  {
    image: "/examGPT.svg",
    label: "GPT",
    title: "General Placement Test",
    description:
      "For pupils transitioning from Primary to Junior Secondary School.",
  },
  {
    image: "/examMCPE.svg",
    label: "MCPE",
    title: "Mandatory Central Promotion Examination",
    description:
      "Required for all SSS2 students seeking to write the Senior WAEC examination.",
  },
];

const AllExams = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-8 justify-center items-center px-4">
      {exams.map((exam) => (
        <div
          key={exam.label}
          className="relative pb-4 my-6 flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden 
                     w-full sm:w-[320px] md:w-[340px] lg:w-[360px] max-w-sm"
        >
          {/* TOP IMAGE */}
          <div className="relative w-full h-48 sm:h-56">
            <img
              src={exam.image}
              alt={exam.label}
              className="w-full h-full object-cover rounded-t-2xl"
            />
            <p className="absolute left-4 bottom-4 bg-white text-black px-4 py-1 rounded-full text-sm sm:text-base font-bold shadow">
              {exam.label}
            </p>
          </div>

          {/* BOTTOM SECTION */}
          <div className="flex flex-col justify-between px-4 sm:px-6 pt-4 pb-2 flex-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 text-[#182700]">
              {exam.title}
            </h2>
            <p className="text-sm sm:text-base text-[#868E8B] mb-4">
              {exam.description}
            </p>
            <div className="flex gap-2">
              <Button
                text="Register"
                bgColor="bg-[#7AC52D]"
                hoverBgColor="hover:bg-white"
                hoverTextColor="hover:text-black"
                iconPosition="right"
                textColor="text-black"
                link="/auth/sign-in"
                border="border-[#7AC52D]"
                rounded="rounded-full"
                size="lg"
                className="w-1/2"
              />

              <Button
                text="Check Result"
                bgColor="bg-white"
                hoverBgColor="hover:bg-[#7AC52D]"
                hoverTextColor="hover:text-black"
                iconPosition="right"
                textColor="text-black"
                link="/check-result"
                border="border-[#7AC52D]"
                rounded="rounded-full"
                size="lg"
                className="w-1/2"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllExams;
