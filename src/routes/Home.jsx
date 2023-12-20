//Styles
import "../styles/Home.scss";

//Components
import Btn from "../components/Btn";
import Download from "../components/Download";
import Particles from "../components/Particles";

function Home() {
  return (
    <div className="home">
      <div className="home__module">
        <h1 className="home__title">María Ripley</h1>
        <div className="home__buttons">
          <Btn path="/portfolio" name="Portfolio"></Btn>
          <Btn path="/about" name="About Me"></Btn>
          <Download></Download>
        </div>
      </div>

      <Particles />
    </div>
  );
}

export default Home;
