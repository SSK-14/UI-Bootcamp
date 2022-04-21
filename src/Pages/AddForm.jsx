import React from "react";
import { useState } from "react";
import AddButton from "../Components/AddButton";
import Form from "../Components/Form";
import Modal, { ModalBody, ModalHeader } from "../Components/Modal";

const AddForm = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <AddButton onClick={() => setShowModal(true)}>ADD MOVIE</AddButton>
      <Modal
        show={showModal}
        setShow={setShowModal}
        // hideCloseButton
      >
        <ModalHeader>
          <h3>Enter Movie Details</h3>
        </ModalHeader>
        <ModalBody>
          <Form close={() => setShowModal(false)} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddForm;
