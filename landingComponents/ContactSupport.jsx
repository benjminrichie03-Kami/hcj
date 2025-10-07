import React from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { TfiEmail } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { BsChatText } from "react-icons/bs";

const cardData = [
  {
    icon: <BsChatText className="w-12 h-12 text-[#7AC52D]" />,
    title: 'Chat with Us',
    description: 'Reach out instantly via WhatsApp for quick support and answers to your questions.',
    button: {
      text: 'Start Chat',
      link: 'https://wa.me/2348158271472',
      aria: 'Start WhatsApp Chat',
    },
  },
  {
    icon: <TfiEmail className="w-12 h-12 text-[#7AC52D]" />,
    title: 'Email Us',
    description: 'Send us an email and our support team will get back to you as soon as possible.',
    button: {
      text: 'Send us an email',
      link: 'mailto:info.platformstechltd@gmail.com',
      aria: 'Send Email',
    },
  },
  {
    icon: <LuPhoneCall className="w-12 h-12 text-[#7AC52D]" />,
    title: 'Call Us',
    description: 'Speak directly with our support team for urgent matters and immediate assistance.',
    button: {
      text: 'Call Us now',
      link: 'tel:+2348158271472',
      aria: 'Call Support',
    },
  },
];

const ContactSupport = () => {
  return (
    <div className="w-full bg-white py-12 px-4 md:px-24 flex justify-center">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between p-6 sm:p-8 w-full h-auto"
          >
            <div>{card.icon}</div>
            <div className="flex-1 flex flex-col justify-center items-start mt-4 mb-4">
              <h3 className="text-xl text-black font-bold mb-2">{card.title}</h3>
              <p className="text-[#868E8B] text-base">{card.description}</p>
            </div>
            <a
              href={card.button.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={card.button.aria}
              className="flex items-center gap-2 hover:border hover:border-[#7AC52D] text-black px-4 py-2 rounded-full font-semibold hover:bg-transparent transition-colors w-fit"
            >
              {card.button.text}
              <IoArrowForwardCircleOutline className="w-6 h-6" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSupport;
