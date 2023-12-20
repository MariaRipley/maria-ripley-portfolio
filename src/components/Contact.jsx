//Styles
import "../styles/Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">CONTACT</h1>
      <form className="contact__form" method="POST" autoComplete="off">
        <label className="contact__form-label">Name</label>
        <input
          className="contact__form-input"
          type="text"
          placeholder="Your name here..."
        />

        <label className="contact__form-label">Email</label>
        <input
          className="contact__form-input"
          type="email"
          placeholder="Your email here..."
        />

        <label className="contact__form-label">Message</label>
        <textarea
          className="contact__form-input contact__form-input--message"
          placeholder="Your message here..."
        ></textarea>

        <input
          className="contact__form-input contact__form-input--submit"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}

export default Contact;
