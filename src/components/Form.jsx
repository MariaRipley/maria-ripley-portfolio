function Form() {
  return (
    <form
      data-netlify="true"
      className="contact__form"
      method="POST"
      autoComplete="off"
      name="contact"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label className="contact__form-label">Name</label>
      <input
        className="contact__form-input"
        type="text"
        name="name"
        placeholder="Your name here..."
        required
      />

      <label className="contact__form-label">Email</label>
      <input
        className="contact__form-input"
        type="email"
        name="email"
        placeholder="Your email here..."
        required
      />

      <label className="contact__form-label">Message</label>
      <textarea
        className="contact__form-input contact__form-input--message"
        name="message"
        placeholder="Your message here..."
        required
      ></textarea>

      <input
        className="contact__form-input contact__form-input--submit"
        type="submit"
        value="Send"
      />
    </form>
  );
}

export default Form;
