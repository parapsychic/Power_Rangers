import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import "../styles/Home.css";
import logo from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from '../context';

const Welcome = () => {
  return (
        <div className="container">
      <main className="main">
      <img src={logo} alt="My Image" width={400} height={400} />
        <h1 className="title">
          Welcome to <a href="">FoodiFy</a>!
        </h1>

        <p className="description">
        "From farm to table, let's keep it safe and stable!"
        </p>

        <div className="connect">
          <ConnectWallet 
          dropdownPosition={{
            align: 'center',
            side: 'bottom'
          }} />
        </div>

        
        <div className="flex">
          <Link to="/team" className="card">
            <h2 className='font-epilogue font-semibold text-[18px] text-white'>Team &rarr;</h2>
            <p className='font-epilogue font-semibold text-[18px] text-white'>
            Discover the faces behind foodify.
            Visit to learn about our talented professionals and how they contribute to our success.
            </p>
          </Link>

          <Link to="/objective" className="card">
            <h2 className='font-epilogue font-semibold text-[18px] text-white'>Objective &rarr;</h2>
            <p className='font-epilogue font-semibold text-[18px] text-white'>
            Our objective is to promote food safety awareness and prevent illness through education and resources.
            </p>
          </Link>

          <a href="https://portal.thirdweb.com/templates" className="card">
            <h2 className='font-epilogue font-semibold text-[18px] text-white'>Contact Us &rarr;</h2>
            <p className='font-epilogue font-semibold text-[18px] text-white'>
            Have a question or comment? Contact us to learn more about our services and resources, or to provide feedback on our website. 
            
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Welcome