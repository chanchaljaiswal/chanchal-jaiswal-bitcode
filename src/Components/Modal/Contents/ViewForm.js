import React from 'react'
import { Card } from 'react-bootstrap';


/**
 * ViewForm component to display user information.
 * 
 * @param {object} user - User object containing user information.
 * @param {string} user.name - User's name.
 * @param {string} user.number - User's mobile number.
 * @param {string} user.email - User's email address.
 * @param {string} user.address - User's address.
 */
const ViewForm = ({user}) => {
  return (
    <Card>
    <Card.Body>
      <Card.Text>
        <strong>Name:</strong> {user.name}
      </Card.Text>
      <Card.Text>
        <strong>Mobile:</strong> {user.number}
      </Card.Text>
      <Card.Text>
        <strong>Email:</strong> {user.email}
      </Card.Text>
      <Card.Text>
        <strong>Address:</strong> {user.address }
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default ViewForm