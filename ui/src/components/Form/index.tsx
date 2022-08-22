import { Field, Formik, Form, ErrorMessage } from 'formik';
import { ValidateSchema } from './helper/ValidateSchema';
import React from 'react';
import './style.css';

interface IProps {
  submitText: string;
  onSubmit: (value: string) => void;
}

interface MyFormValues {
  originLink: string;
}

export const ShortURLForm: React.FC<IProps> = ({ submitText, onSubmit }) => {
  const handleSubmit = (values: MyFormValues, actions: any) => {
    console.log(values);
    onSubmit(values.originLink);
    actions.setSubmitting(false);
  };

  const initialValues: MyFormValues = { originLink: '' };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ValidateSchema}>
      {({ touched, errors, isSubmitting }) => (
        <Form className="form">
          <Field
            className={`long-link ${touched.originLink && errors.originLink ? 'is-invalid' : ''}`}
            type="originLink"
            name="originLink"
            placeholder="http://type-your-link.here ..."
          />
          <ErrorMessage component="div" name="originLink" className="invalid-feedback" />
          <button className="short" type="submit">
            {submitText}
          </button>
        </Form>
      )}
    </Formik>
  );
};
