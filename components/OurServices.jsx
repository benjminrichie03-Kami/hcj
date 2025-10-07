import { useState } from "react";
import Button from "./Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const OurServices = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [fadeKey, setFadeKey] = useState(0);

  const tabs = [
    { id: "register", label: "Register for Exam", link: "/auth/sign-in" },
    { id: "check", label: "Check Result", link: "/check-result" },
    { id: "school", label: "School Login", link: "/auth/sign-in" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "register":
        return (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* LEFT */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#182700] font-bold mb-6 leading-snug">
                Secure Online{" "}
                <span className="relative inline-block">
                  Registration
                  <svg
                    className="absolute left-0 right-0 -bottom-2 mx-auto"
                    width="150"
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

              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                Register for BECE, SSCE, and other exams in minutes.
                <br className="hidden sm:block" />
                Complete your form, upload documents, and pay fees securely
                <br className="hidden sm:block" />
                from home.
              </p>

              <Button
                text="Start Registration"
                bgColor="bg-[#121212]"
                hoverBgColor="hover:bg-[#7AC52D]"
                hoverTextColor="hover:text-white"
                iconPosition="right"
                textColor="text-white"
                link={tabs.find((tab) => tab.id === activeTab).link}
                border="border-white"
                rounded="rounded-full"
                icon={IoArrowForwardCircleOutline}
                size="lg"
                className="w-full sm:w-2/3 lg:w-2/5 mt-4"
              />
            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-2/5">
              <div className="bg-[#182700] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white">
                <div className="space-y-6 sm:space-y-8">
                  {[
                    "General Placement Test (GPT)",
                    "Primary Leaving School Certificate Examination (PLSCE)",
                    "Mandatory Central Promotion Examination (MCP)",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 pb-4 sm:pb-6 ${
                        index !== 2 ? "border-b border-green-700" : ""
                      }`}
                    >
                      <div className="bg-white text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
                        {item}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      // Same tweaks for "check" & "school"
      case "check":
      case "school":
        return (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#182700] font-bold mb-6 leading-snug">
                {activeTab === "check"
                  ? "Instant Result Verification"
                  : "Registration ease for Schools"}
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                {activeTab === "check"
                  ? "Enter your PIN and exam year to access your official results anytime, anywhere — fast and secure."
                  : "Manage student registrations, view reports, download records, and communicate with EDCABI directly."}
              </p>
              <Button
                text={activeTab === "check" ? "Check Now" : "Login as School"}
                bgColor="bg-[#121212]"
                hoverBgColor="hover:bg-[#7AC52D]"
                hoverTextColor="hover:text-white"
                iconPosition="right"
                textColor="text-white"
                link={tabs.find((tab) => tab.id === activeTab).link}
                border="border-white"
                rounded="rounded-full"
                icon={IoArrowForwardCircleOutline}
                size="lg"
                className="w-full sm:w-2/3 lg:w-1/3 mt-4"
              />
            </div>

            <div className="w-full lg:w-[428px]">
              <div className="bg-[#182700] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white">
                <div className="space-y-6 sm:space-y-8">
                  {(activeTab === "check"
                    ? [
                        "Enter PIN & Check Result",
                        "Mobile Result Access",
                        "Download and Print Result",
                      ]
                    : [
                        "Bulk Student Registration",
                        "View Registration Reports",
                        "Download Different Sheets",
                      ]
                  ).map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 pb-4 sm:pb-6 ${
                        index !== 2 ? "border-b border-green-700" : ""
                      }`}
                    >
                      <div className="bg-white text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
                        {item}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl md:mx-24 px-4 sm:px-8 lg:px-16 py-12 sm:py-16 shadow-lg border border-gray-200 rounded-2xl sm:rounded-3xl mb-12">
      {/* TITLE */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#182700] font-bold mb-1">
          Our core{" "}
          <span className="relative inline-block">
            services
            <svg
              className="absolute left-0 right-0 -bottom-2 mx-auto"
              width="120"
              height="10"
              viewBox="0 0 250 10"
              fill="none"
            >
              <path
                d="M2 7C50 0 200 3 248 7"
                stroke="#84cc16"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
      </div>

  
      {/* TABS */}
      <div className="mb-8 sm:mb-12">
        <div className="flex border-b border-gray-300 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setFadeKey((prev) => prev + 1);
              }}
              className={`flex-1 py-2 px-2 sm:py-4 sm:px-6 text-sm sm:text-lg font-medium transition-all relative whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-white bg-[#7AC52D] rounded-t-lg"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-8 sm:mt-12">
        <div key={fadeKey} className="animate-fadein">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default OurServices;































































































































































// import { useState } from "react";
// import { ArrowRight } from "lucide-react";
// import Button from "./Button";
// import { IoArrowForwardCircleOutline } from "react-icons/io5";

// const OurServices = () => {
//   const [activeTab, setActiveTab] = useState("register");
//   const [fadeKey, setFadeKey] = useState(0);

//   const tabs = [
//     { id: "register", label: "Register for Exam" },
//     { id: "check", label: "Check Result" },
//     { id: "school", label: "School Login" },
//   ];

//   const renderContent = () => {
//     switch (activeTab) {
//       case "register":
//         return (
//           <div className="flex flex-col md:flex-row gap-12 items-start">
//             <div className="flex-1">
//               <h2 className="text-4xl text-[#182700] font-bold mb-6">
//                 Secure Online{" "}
//                 <span className="relative inline-block">
//                   Registration
//                   <svg
//                     className="absolute left-0 right-0 -bottom-2 mx-auto"
//                     width="200"
//                     height="8"
//                     viewBox="0 0 200 8"
//                     fill="none"
//                   >
//                     <path
//                       d="M2 6C40 2 160 2 198 6"
//                       stroke="#84cc16"
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </span>
//               </h2>

//               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//                 Register for BECE, SSCE, and other exams in minutes.
//                 <br />
//                 Complete your form, upload documents, and pay fees securely
//                 <br />
//                 from home.
//               </p>

//               <Button
//                 text="Start Registration"
//                 bgColor="bg-[#121212]"
//                 hoverBgColor="hover:bg-[#7AC52D]"
//                 hoverTextColor="hover:text-white"
//                 iconPosition="right"
//                 textColor="text-white"
//                 link="/dashboard"
//                 border="border-white"
//                 rounded="rounded-full "
//                 icon={IoArrowForwardCircleOutline}
//                 size="lg"
//                 className="w-1/3 mt-5"
//               />
//             </div>
//             <div className="w-full md:w-2/5">
//               <div className="bg-[#182700] rounded-3xl p-10 text-white">
//                 <div className="space-y-8">
//                   <div className="flex items-start gap-4 pb-6 border-b border-green-700">
//                     <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
//                       1
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl">
//                         General Placement Test (GPT)
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4 pb-6 border-b border-green-700">
//                     <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
//                       2
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl">
//                         Primary Leaving School Certificate Examination (PLSCE)
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
//                       3
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl">
//                         Mandatory Central Promotion Examination (MCP)
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "check":
//         return (
//           <div className="flex gap-12 items-start">
//             <div className="flex-1">
//               <h2 className="text-4xl text-[#182700] font-bold mb-6">
//                 Instant Result{" "}
//                 <span className="relative inline-block">
//                   Verification
//                   <svg
//                     className="absolute left-0 right-0 -bottom-2 mx-auto"
//                     width="200"
//                     height="8"
//                     viewBox="0 0 200 8"
//                     fill="none"
//                   >
//                     <path
//                       d="M2 6C40 2 160 2 198 6"
//                       stroke="#84cc16"
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </span>
//               </h2>

//               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//                 Enter your PIN and exam year to access your official results
//                 <br />
//                 anytime, anywhere — fast and secure
//               </p>
//               <Button
//                 text="Check Now"
//                 bgColor="bg-[#121212]"
//                 hoverBgColor="hover:bg-[#7AC52D]"
//                 hoverTextColor="hover:text-white"
//                 iconPosition="right"
//                 textColor="text-white"
//                 link="/dashboard"
//                 border="border-white"
//                 rounded="rounded-full "
//                 icon={IoArrowForwardCircleOutline}
//                 size="lg"
//                 className="w-1/3 mt-5"
//               />
//             </div>
//             <div className="w-[428px]">
//               <div className="bg-[#182700] rounded-3xl p-10 text-white">
//                 <div className="space-y-8">
//                   <div className="flex items-start gap-4 pb-6 border-b border-green-700">
//                     <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
//                       1
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl">
//                         Enter PIN & Check Result
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4 pb-6 border-b border-green-700">
//                     <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
//                       2
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl">
//                         Mobile Result Access
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
//                       3
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl">
//                         Download and Print Result
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "school":
//         return (
//           <div className="flex gap-12 items-start">
//             <div className="flex-1">
//               <h2 className="text-4xl text-[#182700] font-bold mb-6">
//                 Registration ease for{" "} <br />
//                 <span className="relative inline-block">
//                   Schools
//                   <svg
//                     className="absolute left-0 right-0 -bottom-2 mx-auto"
//                     width="130"
//                     height="8"
//                     viewBox="0 0 200 8"
//                     fill="none"
//                   >
//                     <path
//                       d="M2 6C40 2 160 2 198 6"
//                       stroke="#84cc16"
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </span>
//               </h2>

//               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//                 Manage student registrations, view reports, download records,
//                 <br />
//                 and communicate with EDCABI directly.
//               </p>
//               <Button
//                 text="Login as School"
//                 bgColor="bg-[#121212]"
//                 hoverBgColor="hover:bg-[#7AC52D]"
//                 hoverTextColor="hover:text-white"
//                 iconPosition="right"
//                 textColor="text-white"
//                 link="/dashboard"
//                 border="border-white"
//                 rounded="rounded-full "
//                 icon={IoArrowForwardCircleOutline}
//                 size="lg"
//                 className="w-1/3 mt-5"
//               />
//             </div>
//             <div className="w-[428px]">
//               <div className="bg-[#182700] rounded-3xl p-10 text-white">
//                 <div className="space-y-8">
//                   <div className="flex items-start gap-4 pb-6 border-b border-green-700">
//                     <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
//                       1
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl">
//                         Bulk Student Registration
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4 pb-6 border-b border-green-700">
//                     <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
//                       2
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl">
//                         View Registration Reports
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
//                       3
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl">
//                         Download Different Sheets
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-20 px-16 shadow-lg py-16 border border-gray-200 rounded-3xl mb-12">
//       <div className="text-center mb-12">
//         <h1 className="text-5xl text-[#182700] font-bold mb-1">
//           Our core{" "}
//           <span className="relative inline-block">
//             services
//             <svg
//               className="absolute left-0 right-0 -bottom-2 mx-auto"
//               width="150"
//               height="10"
//               viewBox="0 0 250 10"
//               fill="none"
//             >
//               <path
//                 d="M2 7C50 0 200 3 248 7"
//                 stroke="#84cc16"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </span>
//         </h1>
//       </div>

//       <div className="mb-12">
//         <div className="flex border-b border-gray-300">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => {
//                 setActiveTab(tab.id);
//                 setFadeKey(prev => prev + 1);
//               }}
//               className={`flex-1 py-4 px-6 text-lg font-medium transition-all relative ${
//                 activeTab === tab.id
//                   ? "text-white bg-[#7AC52D] rounded-t-lg"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="mt-12">
//         <div
//           key={fadeKey}
//           className="animate-fadein"
//         >
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurServices;
