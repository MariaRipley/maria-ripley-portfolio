//Styles
import "../styles/Me.scss";

function Me() {
  return (
    <div className="me">
      <div className="me__pic-container">
        <img
          className="me__pic-img"
          src="../../public/images/pic.jpg"
          alt="Redhead with face into plants"
        />
        <p className="me__pic-credits">@frankflores pic</p>
      </div>
      <div className="me__info">
        <h1 className="info__title">María Robles</h1>
        <p className="info__job">Frontend Developer</p>
      </div>
    </div>
  );
}

export default Me;
