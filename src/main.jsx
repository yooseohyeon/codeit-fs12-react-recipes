import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppMultiInput from "./AppMultiInput.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppMultiInput />
  </StrictMode>,
);
