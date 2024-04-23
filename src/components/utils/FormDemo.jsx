import React, { useState } from "react";

const FormDemo = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      <option value="">Select...</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  );
};

export default FormDemo;
