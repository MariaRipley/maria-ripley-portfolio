//Styles
import "../styles/About.scss";

//Components
import Header from "../components/Header";
import Me from "../components/Me";
import Background from "../components/Background";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <Me />
        <div className="about__bg-skills">
          <Background />
          <div className="vertical-rule"></div>
          <Skills />
        </div>
        <Contact />
      </div>
    </>
  );
}

export default About;
