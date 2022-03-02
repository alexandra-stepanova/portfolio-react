import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SectionHeader from "../sectionHeader/SectionHeader";
import { useFormValidation } from "../../utils/hooks/useFormValidation";
import { init, sendForm } from "emailjs-com";
init("CaIDuylHPgQZFDIdR");

function Contact() {
  const [validInput, setValidInput] = useState("");
  const { values, handleChange, errors, isValid, resetForm } =
    useFormValidation();
  const [contactNumber, setContactNumber] = useState("000000");
  const { handleSubmit } = useForm();

  function handleChangeInput(e) {
    handleChange(e);
    if (validInput.length > 0) {
      setValidInput("");
    }
  }

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const onSubmit = (data) => {
    console.log(data);
    generateContactNumber();
    sendForm("default_service", "template_2lcc6aq", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    resetForm();
  };

  return (
    <section className="contact" id="contact">
      <SectionHeader name="Contact me" />
      <form
        className="contact__form"
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="contact_number" value={contactNumber} />
        <label>
          <input
            value={values.user_name || ""}
            name="user_name"
            required="required"
            className="contact__input"
            type="text"
            placeholder="Name"
            minLength="5"
            maxLength="30"
            onChange={handleChangeInput}
          />
          <div
            className={`contact__input-hidden ${
              errors.user_name ? "contact__input-error" : ""
            }`}
          >
            {errors.user_name}
          </div>
        </label>
        <label>
          <input
            value={values.user_email || ""}
            required="required"
            type="email"
            name="user_email"
            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
            id="email"
            placeholder="Email"
            className="contact__input"
            onChange={handleChangeInput}
          />
          <div
            className={`contact__input-hidden ${
              errors.user_email ? "contact__input-error" : ""
            }`}
          >
            {errors.user_email}
          </div>
        </label>
        <label>
          <textarea
            value={values.message || ""}
            name="message"
            id="message"
            rows="10"
            minLength="10"
            maxLength="500"
            className="contact__input"
            required="required"
            type="text"
            onChange={handleChangeInput}
          />
          <div
            className={`contact__input-hidden ${
              errors.message ? "contact__input-error" : ""
            }`}
          >
            {errors.message}
          </div>
        </label>
        <input
          type="submit"
          value="Send"
          className={`contact__button ${
            !isValid ? "contact__button_disabled" : ""
          }`}
          disabled={!isValid}
        />
      </form>
    </section>
  );
}

export default Contact;
