import React from "react";
import ColorPicker from "./components/ColorComponents/ColorPicker";

import "./styles.css";
// use JavaScript modules to export and import components
function App() {
  // Step 3 - Render ColorPicker in App
  return (
    <div className="counter">
      <ColorPicker />
    </div>
  );
}

export default App;
