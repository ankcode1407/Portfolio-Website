import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-semibold">Shaurya Mishra</h1>
      <p className="mt-4 text-lg">
        AI Governance & Policy Research
      </p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
