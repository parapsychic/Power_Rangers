import "./styles/Card.css";

export default function Card({ profilePicture, name, text, image }) {
  
  return (
    <div className="feed-container">
      <div className="user-bar">
        <img className="profile-picture" src={profilePicture}></img>
        <div className="name">{name}</div>
      </div>
      <div className="text">
        {text}
      </div>
      <img className="user-media" src={image}></img>
    </div>
  )
}
