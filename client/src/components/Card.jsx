//Styles
import "../styles/Card.scss";

//Icons
import { FaGithubAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

function Card(props) {
  return (
    <a
      className="card"
      href={props.web}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="card__img" src={props.image} alt="" />
      <div className="card__info">
        <h3 className="card__title">{props.title}</h3>
        <div className="card__technologies">
          <p className="card__tech">{props.technology1}</p>
          <p className="card__tech">{props.technology2}</p>
          <p className="card__tech">{props.technology3}</p>
        </div>
        <div className="card__project">
          <a
            className="card__link"
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt />
          </a>
          <a
            className="card__link"
            href={props.web}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbWorldWww />
          </a>
        </div>
      </div>
    </a>
  );
}

export default Card;
