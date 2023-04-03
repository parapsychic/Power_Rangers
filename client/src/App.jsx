import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import logo from "./assets/logo.png"
import { Link, useNavigate } from "react-router-dom";
// import { useStateContext } from './context';
import Feed from "./pages/Feed";
import Welcome from "./pages/Welcome";
import { useAddress, useMetamask } from '@thirdweb-dev/react';

export default function Home() {

  const navigate = useNavigate();
  const address = useAddress();
  const connect = useMetamask();
  return (
    <div>
      { address ? (<Feed/>) : (<Welcome/>) }
    </div>
  );
}
