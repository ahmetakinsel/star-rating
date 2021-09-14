import "./App.css";
import React, { useState } from "react";
import StarRate from "./StarRate";

function App() {
  const [rating, setRating] = useState("0");

  const handleChange = (value) => {
    setRating(value);
  };
  return (
    <div>
      <h2>Star Rating</h2>

      <StarRate
        count={5} //editable
        size={40} //editable
        value={rating}
        inactiveColor={"#ddd"}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
