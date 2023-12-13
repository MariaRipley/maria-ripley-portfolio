//Styles
import "../styles/Card.scss";

//Icons
// import { faGlobe } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  return (
    <div className="card">
      <img className="card__img" src={props.image} alt="" />
      <h3 className="card__title">{props.title}</h3>
      <div className="card__technologies">
        <p className="card__link">{props.technology1}</p>
        <p className="card__link">{props.technology2}</p>
        <p className="card__link">{props.technology3}</p>
      </div>
      <div className="card__project">
        <a
          className="card__link"
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src="./images/github-alt.svg" alt="GitHub icon" /> */}
        </a>
        <a
          className="card__link"
          href={props.web}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <FontAwesomeIcon icon={faGlobe} className="card__link--img" /> */}
        </a>
      </div>
    </div>
  );
}

export default Card;
