"use client";
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const faqs = [
  {
    question: "What is Beast11?",
    answer:
      "Beast11 is a fantasy sports platform where you can create teams, join contests, and win rewards.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Just sign up with your email or social account — it takes less than a minute.",
  },
  {
    question: "Can I play with my friends?",
    answer:
      "Yes! You can create private contests and invite your friends to join.",
  },
  {
    question: "Is Beast11 free to play?",
    answer:
      "Yes! Beast11 offers both free and paid contests. You can start with the free ones to get the hang of it.",
  },
];

export default function FaqAccordion() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-3xl md:w-[60%] space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <div
              key={index}
              className="bg-[#0f172a] border border-blue-600 rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 py-3 text-left flex justify-between items-center text-gray-100 hover:bg-blue-950 transition-colors duration-200"
              >
                <span className="text-sm font-medium">{faq.question}</span>
                <IoChevronDownSharp
                  className={`text-blue-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`px-4 overflow-hidden text-gray-300 text-sm transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 py-3" : "max-h-0 py-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
