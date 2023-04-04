
import "../styles/Home.css";
import person from "../assets/person.png"
import logo from "../assets/logo.png"

export default function Team() {
  return (
    <div className="container">
      <main className="main">
      <img src={logo} alt="My Image" width={400} height={400} />
        <h1 className="title">
          Meet our <a href="">Team</a>!
        </h1>

        <p className="description">
        "From farm to table, let's keep it safe and stable!"
        </p>

      

        <div className="grid">
          <a href="https://www.linkedin.com/in/alan-bg/" className="card">
            <h2 className="font-epilogue font-semibold text-[18px] text-white">Alan  Biju  George</h2>
            <div className="teamdes">
            <img src={person} alt="My Image" width={100} height={150} />
            <p className="font-epilogue font-semibold text-[18px] text-white">
            Software engineer,Specialised in App and Web Development.
            </p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/anandusunilkumar/" className="card">
            <h2 className="font-epilogue font-semibold text-[18px] text-white">Anandu Sunil Kumar</h2>
            <div className="teamdes">
            <img src={person} alt="My Image" width={100} height={150} />
            <p className="font-epilogue font-semibold text-[18px] text-white">
            Software engineer,Specialised in App Development and Machine Learning
            </p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/antony-thomas-8a6273212/" className="card">
            <h2 className="font-epilogue font-semibold text-[18px] text-white"> Antony  Thomas</h2>
            <div className="teamdes">
            <img src={person} alt="My Image" width={100} height={150} />
            <p className="font-epilogue font-semibold text-[18px] text-white">
            Software engineer,Specialised in Webdevelopment and Blockchain.
            </p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/febinkdominic/" className="card">
            <h2 className="font-epilogue font-semibold text-[18px] text-white">Febin  K  Dominic</h2>
            <div className="teamdes">
            <img src={person} alt="My Image" width={100} height={150} />
            <p className="font-epilogue font-semibold text-[18px] text-white">
            Software engineer,Specialised in Machine Learning,App and Web Developmen.
            </p>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}
