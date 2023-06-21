import React from 'react';
import { Form, Button, ButtonToolbar } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// validation schema for formik 
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  number: Yup.number()
    .required('Number is required')
    .max(9999999999, 'Number must be a maximum of 10 digits'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  address: Yup.string().required('Address is required')
});

const CreateUserForm = ({ handleCreateUser, handleCreateUserModalClose }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
      email: '',
      address: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleCreateUser(values);
      formik.resetForm();
      handleCreateUserModalClose(false);
    }
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isValid={formik.touched.name && !formik.errors.name}
          isInvalid={formik.touched.name && formik.errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formNumber">
        <Form.Label>Number:</Form.Label>
        <Form.Control
          type="text"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isValid={formik.touched.number && !formik.errors.number}
          isInvalid={formik.touched.number && formik.errors.number}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.number}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isValid={formik.touched.email && !formik.errors.email}
          isInvalid={formik.touched.email && formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formAddress">
        <Form.Label>Address:</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isValid={formik.touched.address && !formik.errors.address}
          isInvalid={formik.touched.address && formik.errors.address}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.address}
        </Form.Control.Feedback>
      </Form.Group>
      <br />
      <ButtonToolbar>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button style={{ marginLeft: '10px' }} variant="secondary" onClick={formik.handleReset}>
          Reset
        </Button>
      </ButtonToolbar>
    </Form>
  );
};

export default CreateUserForm;
