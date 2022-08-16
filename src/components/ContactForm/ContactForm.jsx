import "./ContactForm.scss";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(30, "Name must not be longer than 30 characters")
      .required("This field is required"),
    email: Yup.string()
      .email("This email is invalid")
      .required("This field is required"),
    message: Yup.string()
      .min(3, "Message must be at least 3 characters")
      .max(1500, "Message must not be longer than 1500 characters")
      .required("This field is required"),
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-form", ...values }),
        })
          .then(() => {
            // alert('Success');
            setStatus("Your message has been sent!");
            actions.resetForm();
            actions.setSubmitting(false);
          })
          .catch(() => {
            // alert('Error');
            setStatus("There was an error. Your message has failed to send.");
          });
      }}
    >
      {() => (
        <Form className="contact-form" name="contact-form" data-netlify={true}>
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="name">
              Full name
            </label>
            <Field
              name="name"
              placeholder="Name"
              type="text"
              className="contact-form__input"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="contact-form__error"
            />
          </div>
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="email">
              Email address
            </label>
            <Field
              name="email"
              placeholder="Email"
              type="email"
              className="contact-form__input"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="contact-form__error"
            />
          </div>
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="message">
              Message
            </label>
            <Field
              name="message"
              placeholder="Message"
              as="textarea"
              className="contact-form__textarea"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="contact-form__error"
            />
          </div>

          {status && (
            <div className="contact-form__status">
              <div className="contact-form__status-txt">{status}</div>
              <button
                className="contact-form__status-btn"
                onClick={() => setStatus("")}
              >
                X
              </button>
            </div>
          )}

          <button type="submit" className="contact-form__btn">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
