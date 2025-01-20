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
import { addSubdistrict, editSubdistrict } from "../api/subdisctrict";

export const ModalSubdistrict = ({ modal, toggle, city, setUpdate, data }) => {
  const [name, setName] = useState(data?.name || "");
  const [description, setDescription] = useState(data?.description || "");

  const isEdit = data ? true : false;

  const createSubdistrict = async () => {
    try {
      if(isEdit){
        const res = await editSubdistrict(data?._id, name, description);
        console.log(res);
      }else{
        const res = await addSubdistrict(name, description, city);
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
      <ModalHeader toggle={toggle}>Subdistrict</ModalHeader>
      <ModalBody>
        <Label>Name:</Label>
        <Input type="text" onChange={(e) => setName(e.target.value)} defaultValue={data?.name}></Input>
        <Label className="mt-3">Description:</Label>
        <Input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          defaultValue={data?.description}
        ></Input>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => createSubdistrict()}>
          {isEdit ? 'Edit' : 'Add'}
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
