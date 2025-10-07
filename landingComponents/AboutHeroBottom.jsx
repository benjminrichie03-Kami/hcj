import React from "react";

const SCROLL_DURATION = 1200; 
const NAVBAR_HEIGHT = 96; // px

const scrollToSection = (e, id) => {
  e.preventDefault();
  const target = document.getElementById(id);
  if (!target) return;
  const startY = window.scrollY;
  const endY = target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  const distance = endY - startY;
  let start;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / SCROLL_DURATION, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(progress));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
};

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

const AboutHeroBottom = () => {
  return (
    <div className="mx-auto w-full bg-[#BCE296] h-10 sm:h-12 lg:h-14 flex items-center justify-center">
      <nav className="w-full overflow-x-auto">
        <ul 
          className="
            flex flex-row justify-center items-center w-full px-2 sm:px-4 lg:px-8
            gap-2 sm:gap-4 md:gap-6 lg:gap-8
            text-[10px] sm:text-xs md:text-sm lg:text-base
            whitespace-nowrap
          "
        >
          <li>
            <a
              href="#the-center"
              className="text-black font-semibold hover:underline"
              onClick={e => scrollToSection(e, "the-center")}
            >
              The Center
            </a>
          </li>
          <li>
            <a
              href="#history-edc-abia"
              className="text-black font-semibold hover:underline"
              onClick={e => scrollToSection(e, "history-edc-abia")}
            >
              History of EDC Abia
            </a>
          </li>
          <li>
            <a
              href="#list-of-directors"
              className="text-black font-semibold hover:underline"
              onClick={e => scrollToSection(e, "list-of-directors")}
            >
              List of Directors
            </a>
          </li>
          <li>
            <a
              href="#government-support"
              className="text-black font-semibold hover:underline"
              onClick={e => scrollToSection(e, "government-support")}
            >
              Government Support
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AboutHeroBottom;
