import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import Team from "./pages/team";
import Objective from "./pages/objective";
import Feed from "./pages/Feed";
// import { StateContextProvider } from "./context";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "fantom-testnet";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <ThirdwebProvider activeChain={activeChain}>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/objective" element={<Objective/>}/>
          <Route path="/Feed" element={<Feed/>}/>
      
        </Routes>
      </ThirdwebProvider>
    </BrowserRouter>

  </React.StrictMode>
);
