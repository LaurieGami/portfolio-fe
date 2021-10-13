import { useState } from "react";
// import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';

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

    const postMessage = (values) => {
        const {
            name,
            email,
            subject,
            message
        } = values;

        console.log(values);

        // axios.post(`/api/contact`,
        //     {
        //         name,
        //         email,
        //         subject,
        //         message
        //     },
        //     // {
        //     //     headers: {
        //     //         authorization: `Bearer ${authToken}`
        //     //     }
        //     // }
        // )
        //     .then((res) => {
        //         setStatus(res.response.data.message);
        //     })
        //     .catch((err) => setStatus(err.response.data.message));
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
            onSubmit={(values, actions) => {
                postMessage(values);
                actions.resetForm();
            }}
        >
            {() => (
                <Form className="">
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