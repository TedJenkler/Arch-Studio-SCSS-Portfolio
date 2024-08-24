import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';

function FormInput({ name, type, placeholder, as }) {
    const { errors, touched } = useFormikContext();

    const fieldClassName = touched[name] && errors[name] ? 'input-field error' : 'input-field';

    return (
        <div className='form-field'>
            <label htmlFor={name} aria-label={placeholder}>
                <Field 
                    type={type} 
                    id={name} 
                    name={name} 
                    placeholder={placeholder} 
                    as={as} 
                    className={fieldClassName} 
                    aria-invalid={touched[name] && errors[name] ? 'true' : 'false'} 
                    aria-describedby={`${name}-error`}
                />
            </label>
            <ErrorMessage 
                name={name} 
                component="div" 
                className='error-message' 
                id={`${name}-error`}
                aria-live="polite"
            />
        </div>
    );
}

export default FormInput;