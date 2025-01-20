import React, { useState } from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { addProvince, editProvince } from "../api/province";

export const ModalProvince = ({ modal, toggle, setUpdate, data }) => {
  const [name, setName] = useState(data?.name || "");
  const [description, setDescription] = useState(data?.description || "");

  const isEdit = data ? true : false;

  const createProvince = async () => {
    try {
      if (isEdit) {
        const res = await editProvince(data?._id, name, description);
        console.log(res);
      } else {
        const res = await addProvince(name, description);
        console.log(res);
      }
      setUpdate(Math.floor(Math.random() * 10000));
      toggle();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Province</ModalHeader>
      <ModalBody>
        <Label>Name:</Label>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          defaultValue={data?.name}
        ></Input>
        <Label className="mt-3">Description:</Label>
        <Input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          defaultValue={data?.description}
        ></Input>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => createProvince()}>
          {isEdit ? "Edit" : "Add"}
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
