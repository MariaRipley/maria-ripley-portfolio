//Styles
import "../styles/Portfolio.scss";

//Components
import Header from "../components/Header";
import Card from "../components/Card";

function Portfolio() {
  return (
    <>
      <Header />
      <div className="portfolio">
        {/* <h1 className="portfolio__title">PORTFOLIO</h1> */}
        <Card
          image="../../public/images/smile-or-not.JPG"
          title="Smile...or not"
          technology1="HTML5"
          technology2="CSS3"
          technology3="JavaScript"
          github="https://github.com/MariaRipley/smile-or-not"
          web="https://mariaripley.github.io/smile-or-not/"
        ></Card>
        <Card
          image="../images/color-flipper.JPG"
          title="Color flipper"
          technology1="HTML5"
          technology2="CSS3"
          technology3="JavaScript"
          github="https://github.com/MariaRipley/color-flipper"
          web="https://mariaripley.github.io/color-flipper/"
        ></Card>
        <Card
          image="../images/nav-bar-toggle.JPG"
          title="Nav Bar Mobile and Desktop"
          technology1="HTML5"
          technology2="CSS3"
          technology3="JavaScript"
          github="https://github.com/MariaRipley/navbar-toggle"
          web="https://mariaripley.github.io/navbar-toggle/"
        ></Card>
        <Card
          image="../images/review-bar.JPG"
          title="Nav Bar Mobile and Desktop"
          technology1="HTML5"
          technology2="CSS3"
          technology3="JavaScript"
          github="https://github.com/MariaRipley/review-slider"
          web="https://mariaripley.github.io/review-slider/"
        ></Card>
        <Card
          image="../images/restaurant-menu.JPG"
          title="Restaurant Menu"
          technology1="HTML5"
          technology2="CSS3"
          technology3="JavaScript"
          github="https://github.com/MariaRipley/restaurant-menu-project"
          web="https://mariaripley.github.io/restaurant-menu-project/"
        ></Card>
        <Card
          image="../images/q-and-a.JPG"
          title="FAQ Page"
          technology1="HTML5"
          technology2="CSS3"
          technology3="JavaScript"
          github="https://github.com/MariaRipley/questions-and-answer"
          web="https://mariaripley.github.io/questions-and-answer/"
        ></Card>
      </div>
    </>
  );
}

export default Portfolio;
