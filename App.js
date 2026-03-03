import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px", backgroundColor: "#f2f2f2", height: "100vh" }}>
      <h1 style={{ color: "blue" }}>My Document Editor</h1>
      <textarea
        rows="20"
        cols="80"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;