import "../styles/Feed.css";
import Card from "../components/Card"
import { useStateContext } from "../context";
import Compose from "../components/Compose";
import DisplayPosts from "../components/DisplayPosts"
import { ConnectWallet } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { id } from "ethers/lib/utils";

export default function Feed({ name, profilePicture }) {

  const [posts, setPosts] = useState([]);
  const { address, contract, getPost } = useStateContext();

  const fetchPost = async (id) =>{
    const data = await getPost(id);
    setPosts(data);
  }

  useEffect(() => {
    if(contract) fetchPost(id);
  }, [address, contract]);

  return (
    <>
      <div className="nav-bar">
        <div id="main-logo">Foodify</div>
        <ConnectWallet accentColor="#62CDFF" colorMode="dark" />
        <div id="user-elements">
          <div id="name">{name}</div>
          <img id="profile-picture" src={profilePicture}></img>
        </div>
      </div>
      <div className="feed">
        <div className="feed-column">
          <Compose />
          <DisplayPosts
            posts={posts}
          />
        </div>
      </div>
    </>
  )
}
