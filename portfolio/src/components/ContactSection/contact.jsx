import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>
        Contact <span>Me</span>
      </h2>

      <form className="contact-form">
        <div className="input-row">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Mail Id" />
        </div>

        <div className="input-row">
          <input type="tel" placeholder="Enter Your Mobile Number" />
          <input type="text" placeholder="Enter Subject Of The Mail" />
        </div>

        <textarea placeholder="Enter Your Message Here..."></textarea>

        <button type="submit">Let's Connect</button>
      </form>
    </section>
  );
}

export default Contact;