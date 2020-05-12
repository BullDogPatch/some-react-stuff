import React, { useState } from "react";
import { buttonValues } from "../../data";
import ColorButton from "./ColorButton";

export default function ColorPicker() {
  // Step 2 - Create a ColorPicker component
  // Step 4 - Import data that holds all button values
  const [colorButtons, setColorButtons] = useState(buttonValues);
  // Step 5 - Map over data to create ColorButton
  // Step 7 - Add selected Color to state + display color + pass setter to button
  const [selectedColor, setSelectedColor] = useState(buttonValues[0].color);
  return (
    <div>
      <p>
        {`color: `}
        <span className="picker-choice">{selectedColor}</span>
      </p>
      <div className="button_container">
        {colorButtons.map((buttonObj, index) => {
          return (
            <ColorButton
              key={index}
              button={buttonObj}
              setSelectedColor={setSelectedColor}
            />
          );
        })}
      </div>
    </div>
  );
}
