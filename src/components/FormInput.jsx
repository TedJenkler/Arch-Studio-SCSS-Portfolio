import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';

function FormInput({ name, type, placeholder, as }) {
    const { errors, touched } = useFormikContext();

    const fieldClassName = touched[name] && errors[name] ? 'input-field error' : 'input-field';
    
    return (
        <div className='form-field'>
            <Field 
                type={type} 
                id={name} 
                name={name} 
                placeholder={placeholder} 
                as={as} 
                className={fieldClassName} 
            />
            <ErrorMessage name={name} component="div" className='error-message' />
        </div>
    );
}

export default FormInput;