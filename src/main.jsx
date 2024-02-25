import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex flex-col items-center justify-center max-w-lg mx-auto p-6 h-screen">
      <App />
    </div>
  </React.StrictMode>
);
