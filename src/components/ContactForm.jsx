import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import arrow from '../assets/images/arrow.svg';
import FormInput from './FormInput'; // Adjust the import path as necessary

function ContactForm() {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Can’t be empty'),
    email: Yup.string().email('Invalid email address').required('Can’t be empty'),
    message: Yup.string().required('Can’t be empty')
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className='contact-form'>
        <h2>Connect with us</h2>
        <div className='form-fields'>
          <FormInput name="name" type="text" placeholder="Name" />
          <FormInput name="email" type="email" placeholder="Email" />
          <FormInput name="message" as="textarea" placeholder="Message" />
          <button type='submit' className='submit-button'>
            <img src={arrow} alt='arrow' />
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default ContactForm;