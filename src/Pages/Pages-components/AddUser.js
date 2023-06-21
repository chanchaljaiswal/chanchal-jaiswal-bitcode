import React, { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import CreateUserForm from '../../Components/Modal/Contents/CreateUserForm';
import CustomModal from '../../Components/Modal/CustomModal';

/**
 * AddUser component to handle adding new users.
 * 
 * @param {function} setUserData - Callback function to set the user data.
 * @param {number} nextId - Next available ID for new users.
 * @param {function} setNextId - Callback function to set the next available ID.
 */
const AddUser = ({  setUserData, nextId, setNextId }) => {
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);

  /**
   * Handles opening/closing the create user modal.
   * 
   * @param {boolean} item - Determines whether the modal should be shown or hidden.
   */ 
  const handleCreateUserModal = (item) => {
    setShowCreateUserModal(item);
  };

 /**
   * Creates a new user.
   * 
   * @param {object} formData - Form data for the new user.
   */
  const handleCreateUser = (formData) => {
    const newUser = {
      id: nextId,
      ...formData
    };

    setUserData((prevData) => [...prevData, newUser]);
    setNextId(nextId + 1);
    handleCreateUserModal(false);
  };

  return (
    <div className="AddUserContainer">
      <div className="AddBtnContainer">
        All Contacts
        <GrAddCircle
          onClick={() => handleCreateUserModal(true)}
          className="addIcon"
          size={20}
        />
      </div>
      {/* custom create user modal Container  */}
      <CustomModal
        show={showCreateUserModal}
        handleModal={handleCreateUserModal}
        title="Add Contact"
        content={
          <CreateUserForm  //user create form
            handleCreateUser={handleCreateUser}
            handleCreateUserModalClose={handleCreateUserModal}
          />
        }
      />
    </div>
  );
};

export default AddUser;
