//Styles
import "../styles/Card.scss";

//Icons
import { FaGithubAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

function Card(props) {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

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
          <button className="card__link" onClick={() => openLink(props.github)}>
            <FaGithubAlt />
          </button>
          <button className="card__link" onClick={() => openLink(props.web)}>
            <TbWorldWww />
          </button>
        </div>
      </div>
    </a>
  );
}

export default Card;
