import React, { Fragment, useState } from "react";
import { Button } from "reactstrap";
import { ModalDelete } from "./modalDelete";
import { ModalSubdistrict } from "./modalSubdistrict";

export const Subdistrict = ({ data, setUpdate }) => {
  const { name, _id } = data;
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const toggleDelete = () => {
    setModalDelete(!modalDelete);
  }

  const toggleEdit = () => {
    setModalEdit(!modalEdit);
  }

  return (
    <Fragment>
      <div className="data-item py-2 my-2 d-flex justify-content-center align-items-center p-3">
        <div>Kecamatan {name}</div>
        <Button color="link" className="delete-btn ms-auto" onClick={toggleDelete}>
          <i class="bi-trash"></i>
        </Button>
        <Button color="link" className="edit-btn" onClick={toggleEdit}>
          <i class="bi bi-pencil-square"></i>
        </Button>
      </div>

      <ModalDelete modal={modalDelete} toggle={toggleDelete} type="subdistrict" id={_id} setUpdate={setUpdate}></ModalDelete>
      <ModalSubdistrict modal={modalEdit} toggle={toggleEdit} data={data} setUpdate={setUpdate}></ModalSubdistrict>
    </Fragment>
  );
};
