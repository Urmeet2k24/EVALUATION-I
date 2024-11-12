import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ContactFormApp from "./ContactFormApp.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactFormApp></ContactFormApp>
  
  </StrictMode>);
