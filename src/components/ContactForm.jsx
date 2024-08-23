import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import arrow from '../assets/images/arrow.svg';

function ContactForm() {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required')
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
          <div className='form-field'>
            <Field type="text" id="name" name="name" placeholder="Name" />
            <ErrorMessage name='name' component="div" className='error-message' />
          </div>
          <div className='form-field'>
            <Field type="email" id="email" name="email" placeholder="Email" />
            <ErrorMessage name='email' component="div" className='error-message' />
          </div>
          <div className='form-field'>
            <Field as="textarea" id="message" name="message" placeholder="Message" />
            <ErrorMessage name='message' component="div" className='error-message' />
          </div>
          <button type='submit' className='submit-button'>
            <img src={arrow} alt='arrow' />
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default ContactForm;