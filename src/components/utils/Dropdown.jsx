// import { useState } from "react";

// const Dropdown = ({ defaultOption, options, onSelect }) => {
//   const [selectedValue, setSelectedValue] = useState(defaultOption);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSelect = (value) => {
//     setSelectedValue(value);

//     onSelect(value);
//   };
//   return (
//     <div
//       className={`nice-select select ${isOpen ? "open" : ""}`}
//       tabIndex={0}
//       onClick={() => setIsOpen(!isOpen)}
//     >
//       <span className="current">{selectedValue}</span>
//       <ul className="list">
//         <li data-value={1} className="option selected">
//           {defaultOption}
//         </li>
//         {options.map((option, index) => (
//           <li
//             key={index}
//             data-value={index + 2}
//             className="option"
//             onClick={() => handleSelect(option)}
//           >
//             {option}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default Dropdown;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCars } from "../../context/CarContext";

const Dropdown = ({
  options,
  selectedValue,
  setSelectedValue,
  setSelectedText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`nice-select select ${isOpen ? "open" : ""}`}
      tabIndex={0}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="current">{selectedValue}</span>
      <ul className="list">
        <li data-value={1} className="option selected">
          انتخاب کنید
        </li>
        {options.map((option, index) => (
          <li
            key={index}
            data-value={index + 2}
            className="option"
            onClick={() => {
              setSelectedValue(option);
              setSelectedText(option);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
