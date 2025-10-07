import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = [
    {
      question: "How do I locate my Pin to Check Result ?",
      answer: {
        intro: "Scratch card PINs are distributed through:",
        list: [
          "Your registered school (for students)",
          "Authorized EDCABI centers across Abia State",
        ],
        outro:
          "Each PIN is unique and used only once. Never share it with anyone.",
      },
    },
    {
      question: "How do I register for an exam online?",
      answer:
        "You can register for exams like BECE or SSCE by visiting the registration page on the EDCABI website, filling in your personal and school details, and using a valid scratch card PIN to complete the process. Schools can also register students in bulk through the School Login Portal.",
    },
    {
      question: "How do I use my Pin to Check Result ?",
      answer: [
        "Enter your PIN in the result checking portal along with your candidate ID to view your exam results.",
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#182700] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-24">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Frequently Asked <br className="hidden lg:block" /> Questions
          </h1>
          <p className="text-white text-sm sm:text-base opacity-90">
            We answered questions here so you don’t have to ask them.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* SEARCH BOX */}
          <div className="mb-6 sm:mb-8">
            <input
              type="text"
              placeholder="Ask a question"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-white text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* FAQ LIST */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-[#90CF50] rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-[#578a25] transition-colors"
                >
                  <span className="text-white font-medium text-sm sm:text-base">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <FiChevronUp className="w-5 h-5 text-white flex-shrink-0 ml-4" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-white flex-shrink-0 ml-4" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2 bg-[#121212] rounded-b-lg">
                    {faq.question ===
                      "How do I locate my Pin to Check Result ?" &&
                    typeof faq.answer === "object" ? (
                      <>
                        <p className="text-white text-sm sm:text-base mb-2">
                          {faq.answer.intro}
                        </p>
                        <ul className="list-disc pl-5 text-white text-sm sm:text-base space-y-1 mb-2">
                          {faq.answer.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        <p className="text-white text-sm sm:text-base">
                          {faq.answer.outro}
                        </p>
                      </>
                    ) : Array.isArray(faq.answer) ? (
                      <ul className="list-disc pl-5 text-white text-sm sm:text-base space-y-1">
                        {faq.answer.map((ans, i) => (
                          <li key={i}>{ans}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-white text-sm sm:text-base whitespace-pre-line">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
