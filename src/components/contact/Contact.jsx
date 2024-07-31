import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  UilEnvelope,
  UilWhatsapp,
  UilFacebookMessenger,
  UilMessage,
  UilArrowRight,
} from "@iconscout/react-unicons";
import "./contact.css";

const EnhancedContact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_7fj2wcc",
        "template_iisbtno",
        form.current,
        "e6aKTlGrOxN3WuIRW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">
        Let's create something amazing together
      </span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <UilEnvelope className="contact__card-icon" />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                mohamedfaraaz007@gmail.com
              </span>
              <a
                href="mailto:mohamedfaraaz007@gmail.com"
                className="contact__button"
              >
                Write me <UilArrowRight className="contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <UilWhatsapp className="contact__card-icon" />
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+91-9606236046</span>
              <a href="https://wa.me/9606236046" className="contact__button">
              Write me <UilArrowRight className="contact__button-icon" />              </a>
            </div>

            <div className="contact__card">
              <UilFacebookMessenger className="contact__card-icon" />
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">user.fb123</span>
              <a href="https://m.me/user.fb123" className="contact__button">
              Write me <UilArrowRight className="contact__button-icon" />              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write your message</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="button button--flex"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <UilMessage className="button__icon" />
            </button>

            {submitStatus === "success" && (
              <p className="submit-message success">
                Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="submit-message error">
                Error sending message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;
