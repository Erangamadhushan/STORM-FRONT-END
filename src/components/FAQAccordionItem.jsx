import { useState, useRef, useEffect } from "react";

export default function FAQAccordionItem({ question, answer, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">{question}</span>

        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-45 text-green-500" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <p className="pb-5 text-gray-400">{answer}</p>
      </div>
    </div>
  );
}
