import "./style/index.css";

import { BrowserRouter, Route } from "react-router-dom";

import { Comments } from "./pages/Comments.tsx";
import { Contact } from "./pages/Contact.tsx";
import { Footer } from "./components/Footer.tsx";
import { Header } from "./components/Header.tsx";
import { Home } from "./pages/Home.tsx";
import { Pictures } from "./pages/Pictures.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { RoutesProvider } from "./providers/RoutesProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <RoutesProvider>
        <Route path="/" element={<Home />} />
        <Route path="/contatos" element={<Contact />} />
        <Route path="/fotos" element={<Pictures />} />
        <Route path="/comentarios" element={<Comments />} />
      </RoutesProvider>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
