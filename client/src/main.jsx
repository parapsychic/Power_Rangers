import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Feed from './Feed';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "fantom-testnet";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChain}>
      <Feed name='Alan' profilePicture={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png"}/>
    </ThirdwebProvider>
  </React.StrictMode>
);
