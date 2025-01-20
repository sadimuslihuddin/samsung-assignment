import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { deleteByType } from "../utils/deleteByType";


export const ModalDelete = ({ modal, toggle, type, id, setUpdate }) => {
  const deleteData = async () => {
    try {
      const res = await deleteByType(type,id);
      setUpdate(Math.floor(Math.random() * 10000));
      console.log(res);
      toggle();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>City</ModalHeader>
      <ModalBody>
        <div>Do you want to delete this {type}?</div>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={() => deleteData()}>
          Delete
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
