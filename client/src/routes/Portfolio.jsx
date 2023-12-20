//Styles
import "../styles/Portfolio.scss";

//Components
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

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
          image="../../public/images/gif-search-engine.JPG"
          title="GIF Search Engine"
          technology1="HTML5"
          technology2="SCSS"
          technology3="JavaScript"
          github="https://github.com/MariaRipley/prueba-vite-gh-pages"
          web="https://mariaripley.github.io/prueba-vite-gh-pages/"
        ></Card>
        <Card
          image="../../public/images/color-flipper.JPG"
          title="Color flipper"
          technology1="HTML5"
          technology2="CSS3"
          technology3="JavaScript"
          github="https://github.com/MariaRipley/color-flipper"
          web="https://mariaripley.github.io/color-flipper/"
        ></Card>
        <Card
          image="../../public/images/mobile-first.JPG"
          title="Mobile First"
          technology1="HTML5"
          technology2="CSS3"
          github="https://github.com/MariaRipley/mobile-first-platzi-project"
          web="https://mariaripley.github.io/mobile-first-platzi-project/
          "
        ></Card>
        <Card
          image="../../public/images/review-slider.JPG"
          title="Review Slider"
          technology1="HTML5"
          technology2="CSS3"
          technology3="JavaScript"
          github="https://github.com/MariaRipley/review-slider"
          web="https://mariaripley.github.io/review-slider/"
        ></Card>
        <Card
          image="../../public/images/restaurant-menu.JPG"
          title="Restaurant Menu"
          technology1="HTML5"
          technology2="CSS3"
          technology3="JavaScript"
          github="https://github.com/MariaRipley/restaurant-menu-project"
          web="https://mariaripley.github.io/restaurant-menu-project/"
        ></Card>
        <Card
          image="../../public/images/faq.JPG"
          title="FAQ Page"
          technology1="HTML5"
          technology2="CSS3"
          technology3="JavaScript"
          github="https://github.com/MariaRipley/questions-and-answer"
          web="https://mariaripley.github.io/questions-and-answer/"
        ></Card>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
