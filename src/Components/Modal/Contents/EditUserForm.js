import React from 'react'
import { Button, ButtonToolbar, Form } from 'react-bootstrap'


/**
 * Form component for editing user information.
 * @param {Object} user - The user object to be edited.
 * @param {Function} handleFormChange - The function to handle form field changes.
 * @param {Function} handleFormSubmit - The function to handle form submission.
 */
const EditUserForm = ({ user, handleFormChange, handleFormSubmit }) => {

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={user.name}
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group controlId="formNumber">
        <Form.Label>Number:</Form.Label>
        <Form.Control
          type="text"
          name="number"
          value={user.number}
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={user.email}
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group controlId="formAddress">
        <Form.Label>Address:</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={user.address}
          onChange={handleFormChange}
        />
      </Form.Group>
      <br/>
      <ButtonToolbar>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </ButtonToolbar>
    </Form>
  )
}

export default EditUserForm
