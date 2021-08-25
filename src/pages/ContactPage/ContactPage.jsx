import './ContactPage.scss';

function ContactPage() {
    return (
        <article className="contact-page">
            <div className="contact-page__wrap">
                <section className="contact-page__section">
                    <h1 className="contact-page__title">Contact</h1>
                    <p className="contact-page__txt">Say hello at <a className="contact-page__link" href="mailto:laurievilleton@gmail.com?subject=Hello, from your website!">laurievilleton@gmail.com</a>, or you can fill the form below:</p>
                </section>
            </div>
        </article>
    );
}

export default ContactPage;