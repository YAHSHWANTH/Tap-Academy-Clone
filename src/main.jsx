import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  </StrictMode>,
);
