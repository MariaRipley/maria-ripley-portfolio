//Styles
import "../styles/Skills.scss";

function Skills() {
  return (
    <div className="skills">
      <p className="skills__title">Skills</p>
      <div className="skills__container">
        <ul className="skills__list">
          <li className="skills__item">HTML5</li>
          <li className="skills__item">CSS3</li>
          <li className="skills__item">JavaScript</li>
          <li className="skills__item">React</li>
          <li className="skills__item">NodeJS</li>
        </ul>
        <ul className="skills__list">
          <li className="skills__item">Express</li>
          <li className="skills__item">MySQL</li>
          <li className="skills__item">Git</li>
          <li className="skills__item">English</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
