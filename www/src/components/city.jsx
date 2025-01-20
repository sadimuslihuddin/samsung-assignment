import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { ModalDelete } from "./modalDelete";
import { ModalCity } from "./modalCity";

export const City = ({ data, setUpdate }) => {
  const { name, _id } = data;
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const toggleDelete = () => {
    setModalDelete(!modalDelete);
  };

  const toggleEdit = () => {
    setModalEdit(!modalEdit);
  };
  return (
    <Fragment>
      <div className="data-item py-2 my-2 d-flex justify-content-start align-items-center p-3">
        <div>Kota {name}</div>
        <Button
          color="link"
          className="delete-btn ms-auto"
          onClick={toggleDelete}
        >
          <i class="bi-trash"></i>
        </Button>
        <Button color="link" className="edit-btn" onClick={toggleEdit}>
          <i class="bi bi-pencil-square"></i>
        </Button>
        <Link to={`/city/${_id}`}>
          <Button color="link">
            <i className="bi-arrow-right"></i>
          </Button>
        </Link>
      </div>

      <ModalDelete
        modal={modalDelete}
        toggle={toggleDelete}
        type="city"
        id={_id}
        setUpdate={setUpdate}
      ></ModalDelete>
      <ModalCity
        modal={modalEdit}
        toggle={toggleEdit}
        data={data}
        setUpdate={setUpdate}
      ></ModalCity>
    </Fragment>
  );
};
