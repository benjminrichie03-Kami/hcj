import React, { useState, useEffect, useMemo } from "react";

// NEWS DATA
const newsItems = [
  {
    image: "/news.svg",
    title: "2025/2026 Placement School Leaving Certificate Examination Registration Begins",
    description:
      "The Abia State Examinations Development Commission has officially announced the commencement of registration for the 2025/2026 Placement School Leaving Certificate Examination (PSLCE). This crucial examination, administered by the Ministry of Education, is designed to assess and certify the academic performance of pupils in Primary 6 and Junior Secondary School (JSS3) across public and approved private schools in the state. Registration is now open for all eligible candidates through the Commission’s online portal, providing a fast, secure, and user-friendly platform for schools and parents. The digital process eliminates paperwork, reduces errors, and ensures real-time confirmation of entries and payments. Schools are required to log in to the EDC website to upload candidate data, select examination centers, and complete payment via approved channels.",
    imagePosition: "left",
  },
  {
    image: "/news.svg",
    title: "2025/2026 Placement School Leaving Certificate Examination Registration Deadline",
    description:
      "The deadline for registration for the 2025/2026 Placement School Leaving Certificate Examination is set for April 30, 2025. All schools and candidates are urged to complete their registrations well before the cutoff date to avoid last-minute complications. After this date, registration will no longer be accepted, and late entries will not be accommodated by the Commission.",
    imagePosition: "right",
  },
  {
    image: "/news.svg",
    title: "Frequently Asked Questions about PSLCE Registration",
    description:
      "To assist candidates and schools during the registration process, the Abia State Examinations Development Commission has published a comprehensive FAQ section on their website. This resource addresses common inquiries related to eligibility, examination centers, and payment methods. Schools and parents are encouraged to consult this section to ensure a smooth registration experience and to clarify any uncertainties.",
    imagePosition: "left",
  },
];

const NewsSection = ({ item, idx }) => {
  const isImageLeft = item.imagePosition === "left";

  // FIRST LINE - split description to put 'Registration is now' on a new line
  let descriptionContent;
  if (idx === 0) {
    const splitText = item.description.split("Registration is now");
    if (splitText.length > 1) {
      descriptionContent = (
        <>
          {splitText[0]}
          <br />
          <span>Registration is now</span>
          {splitText[1].startsWith(" open") ? splitText[1] : " " + splitText[1]}
        </>
      );
    } else {
      descriptionContent = item.description;
    }
  } else {
    descriptionContent = item.description;
  }

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
      } items-start md:items-center gap-6 md:gap-10 w-full max-w-[1104px] mx-auto my-10`}
    >
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-[410px] h-[320px] bg-transparent">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col text-left w-full md:w-[621px]">
        <h1 className="text-xl md:text-2xl font-bold text-black mb-2">
          {item.title}
        </h1>
        <p className="text-black text-base">{descriptionContent}</p>
      </div>
    </div>
  );
};

const LandingNews = ({ 
  searchValue = "",
  newsData = newsItems, // Accept API level news 
  debounceDelay = 800
}) => {
  const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);

  // DEBOUNCE SEARCH INPUT
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, debounceDelay);

    // CLEAR TIMEOUT IF VALUE CHANGES BEFORE DELAY
    return () => {
      clearTimeout(handler);
    };
  }, [searchValue, debounceDelay]);

  // FILTER NEWS BASED ON DEBOUNCED SEARCH VALUE
  const filteredNews = useMemo(() => {
    if (!debouncedSearchValue.trim()) {
      return newsData;
    }
    
    const searchTerm = debouncedSearchValue.toLowerCase().trim();
    return newsData.filter(item => 
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
  }, [debouncedSearchValue, newsData]);

  return (
    <div className="flex flex-col gap-8 items-center px-4 sm:px-6 lg:px-8">
      {filteredNews.length > 0 ? (
        filteredNews.map((item, idx) => (
          <NewsSection key={idx} item={item} idx={idx} />
        ))
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">No news found</div>
          <div className="text-gray-400 text-sm">
            Try adjusting your search terms: "{debouncedSearchValue}"
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingNews;
