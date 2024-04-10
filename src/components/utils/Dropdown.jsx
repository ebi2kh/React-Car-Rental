import React, { useState } from "react";

const Dropdown = ({ defaultOption, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`nice-select select ${isOpen ? "open" : ""}`}
      tabIndex={0}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="current">{defaultOption}</span>
      <ul className="list">
        <li data-value={1} className="option selected">
          {defaultOption}
        </li>
        {options.map((option, index) => (
          <li key={index} data-value={index + 2} className="option">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
