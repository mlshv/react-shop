import React from 'react';
import { Page } from '../Page';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhoneInput from '../PhoneInput/PhoneInput';
import styles from './Checkout.module.css';

const renderTextField = field => (
  <TextField
    margin="normal"
    variant="outlined"
    error={field.meta.touched && !!field.meta.error}
    helperText={field.meta.touched && field.meta.error}
    label={field.label}
    {...field.input}
  />
);

const renderPhoneField = field => (
  <PhoneInput
    margin="normal"
    variant="outlined"
    error={field.meta.touched && !!field.meta.error}
    helperText={field.meta.touched && field.meta.error}
    label={field.label}
    {...field.input}
  />
);

const Checkout = ({ handleSubmit, valid }) => (
  <Page>
    <form onSubmit={handleSubmit}>
      <Field label="Name" name="name" component={renderTextField} type="text" />
      <Field
        label="Email"
        name="email"
        component={renderTextField}
        type="email"
      />
      <Field
        label="Phone"
        name="phone"
        component={renderPhoneField}
        type="text"
      />
    </form>
    <div className={styles.submit}>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        disabled={!valid}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  </Page>
);

export default reduxForm({
  form: 'checkout',
  validate: values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 4) {
      errors.name = 'Must be 4 characters or more';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.phone) {
      errors.phone = 'Required';
    } else if (values.phone.length < 18) {
      errors.phone = 'Input complete phone number';
    }

    return errors;
  }
})(Checkout);
