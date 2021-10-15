import './ContactPage.scss';

import ContactForm from '../../components/ContactForm/ContactForm';

function ContactPage() {
    return (
        <article className="contact-page">
            <div className="contact-page__wrap">
                <section className="contact-page__section">
                    <h1 className="contact-page__title">Say Hello</h1>
                    <p className="contact-page__txt">Feel free to contact me at <a className="contact-page__link" href="mailto:laurievilleton@gmail.com?subject=Hello, from laurievilleton.com!">laurievilleton@gmail.com</a> or by filling this form, and I will get back to you as soon as I can.</p>
                    <ContactForm/>
                </section>
            </div>
        </article>
    );
}

export default ContactPage;