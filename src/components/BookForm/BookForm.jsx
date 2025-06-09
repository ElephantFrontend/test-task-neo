import css from "./BookForm.module.css"
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import {useId} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import toast from "react-hot-toast";
import Datepicker from "../Datepicker/Datepicker.jsx";

const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: ""
};

const BookingSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    bookingDate: Yup.date().required("Required"),
    comment: Yup.string(),
});

function BookForm () {
    const nameFieldId = useId();
    const emailFieldId = useId();
    const commentFieldId = useId();

    const handleSubmit = (info, actions) => {

        toast.success('Booked!');

        actions.resetForm();
    };

    return (
        <>
            <section className={css['booking-section']}>
                <h5 className={css['booking-section--title']}>Book your campervan now</h5>
                <p className={css['booking-section--description']}>Stay connected! We are always ready to help you.</p>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={BookingSchema}>
                    <Form className={css['booking-form']}>
                        <div className={css['booking-form-item']}>
                            <Field className={css['booking-form-field']} type="text" placeholder="Name*" name="name" id={nameFieldId}/>
                            <ErrorMessage className={css['booking-form--error']} name="name" component="span"/>
                        </div>

                        <div className={css['booking-form-item']}>
                            <Field className={css['booking-form-field']} type="email" placeholder="Email*" name="email" id={emailFieldId}/>
                            <ErrorMessage className={css['booking-form--error']} name="email" component="span"/>
                        </div>

                        <div className={css['booking-form-item']}>
                            <Field className={`${css['booking-form-field']} ${css['booking-form-field-textarea']}`} as="textarea" type="comment" placeholder="Comment" name="comment" id={commentFieldId}/>
                            <ErrorMessage className={css['booking-form--error']} name="comment" component="span"/>
                        </div>

                        <div className={css['booking-form-item']}>
                            <Datepicker name="bookingDate" placeholder={'Booking date*'}></Datepicker>
                            <ErrorMessage className={css['booking-form--error']} name="bookingDate" component="span"/>
                        </div>

                        <button className='btn-primary' type="submit">Send</button>
                    </Form>
                </Formik>
            </section>
        </>
    )
}

export default BookForm
