//Styles
import "../styles/Contact.scss";

//Components
import Form from "../routes/Form";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">CONTACT</h1>
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;
