import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { AiFillEye } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import CustomModal from "../../Components/Modal/CustomModal";
import ViewForm from "../../Components/Modal/Contents/ViewForm";
import EditUserForm from "../../Components/Modal/Contents/EditUserForm";

const ListComponent = ({ data, setUserData }) => {
  const [openViewModal, setopenViewModal] = useState(false);
  const [openEditModal, setopenEditModal] = useState(false);
  const [selectedUser, setselectedUser] = useState({});

  /**
   * Handles the opening and closing of the view modal.
   * @param {boolean} item - Indicates whether the view modal should be opened or closed.
   */
  const handleViewModal = (item) => {
    setopenViewModal(item);
  };


   /**
   * Handles the opening and closing of the edit modal.
   * @param {boolean} item - Indicates whether the edit modal should be opened or closed.
   */
  const handleEditModal = (item) => {
    setopenEditModal(item);
  };

   /**
   * Handles the deletion of an item from the data array.
   * @param {Object} item - The item to be deleted.
   */
  const handleDelete = (item) => {
    const updatedData = data.filter((user) => user !== item);
    setUserData(updatedData);
  };


  /**
   * Renders a list item with associated actions.
   * @param {Object} item - The item to be rendered.
   */
  function ListGroupItem(item, index) {
    return (
      <div key={index} className="listItemContainer">
        {item.id}
        <div className="avatar-container">
          <RxAvatar size={40} />
        </div>
        <div className="content-container">
          <div className="row">{item.name}</div>
          <div className="row">{item.number}</div>
        </div>
        <div>
          <AiFillEye
            onClick={() => {
              handleViewModal(true);
              setselectedUser(item);
            }}
            size={18}
            className="iconsContainer"
          />
          <AiFillDelete
            onClick={() => handleDelete(item)}
            size={18}
            className="iconsContainer"
          />
          <BsFillPencilFill
            onClick={() => {
              handleEditModal(item);
              setselectedUser(item);
            }}
            size={18}
            className="iconsContainer"
          />
        </div>
      </div>
    );
  }

   /**
   * Handles changes in the edit form fields.
   * @param {Object} event - The event object representing the form field change event.
   */
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setselectedUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };


   /**
   * Handles the form submission in the edit form.
   * @param {Object} event - The event object representing the form submission event.
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedData = data.map((item) => {
      if (item.id === selectedUser.id) {
        return selectedUser;
      }
      return item;
    });
    setUserData(updatedData);
    setopenEditModal(false);
  };

  
  
  return (
    <div>
      {data.map((item, index) => {
        return ListGroupItem(item, index);
      })}
      <CustomModal
        show={openViewModal}
        handleModal={handleViewModal}
        title="Contact details"
        content={<ViewForm user={selectedUser} />}
      />
      <CustomModal
        show={openEditModal}
        handleModal={handleEditModal}
        title="Edit Contact"
        content={ <EditUserForm
          user={selectedUser}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
        />}
      />
    </div>
  );
};

export default ListComponent;
