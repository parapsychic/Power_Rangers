import "../styles/Home.css";
import logo from "../assets/logo.png"

export default function Objective() {
  return (
    <div className="container">
      <main className="main">
      <img src={logo} alt="My Image" width={400} height={400} />
        <h1 className="title">
          Our <a href="">Objective</a>!
        </h1>

        <p className="description">
        "From farm to table, let's keep it safe and stable!"
        </p>

        <p className="objective">
        This project aims to promote food safety awareness and provide information and resources to consumers, food businesses, and producers to improve food safety practices.
        Through our website, we will educate people on proper food handling, cooking techniques, and storage practices, as well as highlight the importance of following food safety standards and guidelines. 
        Additionally, we will offer tools and resources for food businesses to implement food safety protocols and provide consumers with a platform to report any concerns or issues related to food safety.
        Ultimately, our goal is to reduce the incidence of foodborne illness and improve the overall safety and quality of the food supply chain. 
        By raising awareness, providing resources, and emphasizing the importance of food safety standards, we hope to create a safer and healthier food system for everyone.
        </p>

      

        
      </main>
    </div>
  );
}