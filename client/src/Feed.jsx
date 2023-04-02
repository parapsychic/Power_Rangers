import "./styles/Feed.css";
import Card from "./Card"

export default function Feed() {
    return (
        <>
      <div className="nav-bar">
      <div id="main-logo">Foodify</div>
      <div id="user-elements">
      <div id="name">ParaPsychic</div>
      <img id="profile-picture" src="https://www.drodd.com/images14/white1.jpg"></img>
      </div>
      </div>
        <div className="feed">
            <Card profilePicture={"https://www.drodd.com/images14/white1.jpg"}
                name={"Something"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                image={"https://www.wallpapers13.com/wp-content/uploads/2015/12/Nature-Lake-Bled.-Desktop-background-image-840x525.jpg"}
            />
        </div>
      </>
    )
}
