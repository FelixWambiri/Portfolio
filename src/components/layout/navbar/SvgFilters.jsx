import React from "react";

const SvgFilters = props => {
  return (
    <svg>
      <defs>
        <filter id="filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 1 0"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SvgFilters;
