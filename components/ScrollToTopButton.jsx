"use client";

import React from "react";
import ScrollUpButton from "react-scroll-up";

const ScrollToTopButton = () => {
  return (
    <ScrollUpButton showUnder={160}>
      <div className="scrollUpButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </div>
    </ScrollUpButton>
  );
};

export default ScrollToTopButton;
