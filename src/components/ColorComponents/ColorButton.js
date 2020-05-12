import React from "react";

const ColorButton = props => {
  console.log(props);
  // Step 1 - Create a ColorButton component
  // Step 6 - Update ColorButton to use props to match data
  // Step 8 - update ColorButton to fire onClick
  return (
    <button
      className="color_button"
      onClick={() => props.setSelectedColor(props.button.color)}
    >
      <span role="img" aria-label="blue heart">
        {props.button.value}
      </span>
    </button>
  );
};

export default ColorButton;
