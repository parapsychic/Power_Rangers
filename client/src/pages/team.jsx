
import "../styles/Home.css";
import person from "../assets/person.png"

export default function Team() {
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

      

        <div className="grid">
          <a href="https://portal.thirdweb.com/" className="card">
            <h2>Alan Biju George</h2>
            <img src={person} alt="My Image" width={30} height={50} />
          </a>

          <a href="https://thirdweb.com/dashboard" className="card">
            <h2>Anandu Sunil Kumar</h2>
            <img src={person} alt="My Image" width={30} height={50} />
          </a>

          <a href="https://portal.thirdweb.com/templates" className="card">
            <h2>Antony Thomas</h2>
            <img src={person} alt="My Image" width={30} height={50} />
          </a>
          <a href="https://portal.thirdweb.com/templates" className="card">
            <h2>Febin K Dominic</h2>
            <img src={person} alt="My Image" width={30} height={50} />
          </a>
        </div>
      </main>
    </div>
  );
}
