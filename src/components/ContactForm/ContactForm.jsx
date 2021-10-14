// import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    // const [status, setStatus] = useState('');

    // let history = useHistory();

    const ContactSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Name must be at least 2 characters')
            .max(30, 'Name must not belonger than 30 characters')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        subject: Yup.string()
            .min(8, 'Subject must be at least 8 characters')
            .max(60, 'Subject must not belonger than 60 characters')
            .required('Required'),
        message: Yup.string()
            .min(8, 'Message must be at least 8 characters')
            .max(300, 'Message must not belonger than 300 characters')
            .required('Required')
    });

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                subject: "",
                message: ""
            }}
            validationSchema={ContactSchema}
            onSubmit={
                (values, actions) => {
                    fetch("/", {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: encode({ "form-name": "contact", ...values })
                    })
                        .then(() => {
                            alert('Success');
                            actions.resetForm()
                        })
                        .catch(() => {
                            alert('Error');
                        })
                        .finally(() => actions.setSubmitting(false))
                }
            }
        >
            {() => (
                <Form className="" name="contact" data-netlify={true}>
                    <div className="">
                        <label className="" htmlFor="name">Name</label>
                        <Field name="name" placeholder="Name" type="text" className="" />
                        <ErrorMessage
                            name="name"
                            component="div"
                            className=""
                        />
                    </div>
                    <div className="">
                        <label className="" htmlFor="email">Email</label>
                        <Field name="email" placeholder="Email" type="email" className="" />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className=""
                        />
                    </div>
                    <div className="">
                        <label className="" htmlFor="subject">Subject</label>
                        <Field name="subject" placeholder="Subject" type="text" className="" />
                        <ErrorMessage
                            name="subject"
                            component="div"
                            className=""
                        />
                    </div>
                    <div className="">
                        <label className="" htmlFor="message">Message</label>
                        <Field name="message" placeholder="Message" as="textarea" className="" />
                        <ErrorMessage
                            name="message"
                            component="div"
                            className=""
                        />
                    </div>
                    <button
                        type="submit"
                        className=""
                    >
                        Send
                    </button>

                    {/* {status &&
                        <div>
                            {status}
                        </div>
                    } */}
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;