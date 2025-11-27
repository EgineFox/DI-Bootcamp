import React, { useRef, useState } from "react";

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleChange = () => {
    if (inputRef.current) {
      setCount(inputRef.current.value.length);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Character Counter</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        onChange={handleChange}   // listening changes
        style={{ padding: "10px", width: "300px" }}
      />
      <p>Character count: {count}</p>
    </div>
  );
};

export default CharacterCounter;