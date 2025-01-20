import React, { Fragment, useEffect, useState } from "react";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
} from "reactstrap";
import { ModalProvince } from "../components/modalProvince";
import { City } from "../components/city";
import { ModalCity } from "../components/modalCity";
import logo from "../assets/logo.png";
import { Loading } from "../components/loading";
import { getProvince } from "../api/province";
import { ModalDelete } from "../components/modalDelete";

export const Home = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(0);
  const [modalProvince, setModalProvince] = useState(false);
  const [modalCity, setModalCity] = useState(false);

  const [province, setProvince] = useState([]);

  const loadData = async () => {
    try {
      const res = await getProvince();
      setData(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    loadData();
  }, [update]);

  const toggleProvince = () => {
    setModalProvince(!modalProvince);
  };

  const toggleCity = () => {
    setModalCity(!modalCity);
  };

  const [modalDelete, setModalDelete] = useState(false);

  const toggleDelete = () => {
    setModalDelete(!modalDelete);
  };

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <Fragment>
      <div className="app-container">
        <div className="mt-3">
          <img className="logo" src={logo} alt="image" loading="lazy" />
        </div>
        <div className="mt-4">
          <Button className="custom-btn d-flex mx-auto" onClick={toggleProvince}>
            <i className="bi bi-plus"></i>
            <div>Add Province</div>
          </Button>
        </div>
        <Row className="mt-4">
          {data &&
            data.map((province) => {
              const { name, cities } = province;
              return (
                <Col md="4" xl="3" className="mt-4">
                  <Card>
                    <CardHeader className="d-flex justify-content-center align-items-center">
                      <div>Provinsi {name}</div>
                      <Button
                        color="link"
                        className="delete-btn ms-auto"
                        onClick={() => {
                          toggleDelete();
                          setProvince(province);
                        }}
                      >
                        <i class="bi-trash"></i>
                      </Button>
                      <Button
                        color="link"
                        className="edit-btn"
                        onClick={() => {
                          toggleProvince();
                          setProvince(province);
                        }}
                      >
                        <i class="bi bi-pencil-square"></i>
                      </Button>
                    </CardHeader>
                    {cities.length > 0 ? (
                      <CardBody>
                        {cities.map((city) => {
                          return <City data={city} setUpdate={setUpdate} />;
                        })}
                      </CardBody>
                    ) : (
                      <CardBody className="gray">
                        Belum ada data yang ditambahkan.
                      </CardBody>
                    )}
                    <CardFooter>
                      <Button
                        className="custom-btn w-100 d-flex justify-content-center"
                        onClick={() => {
                          toggleCity();
                          setProvince(province);
                        }}
                      >
                        <i className="bi bi-plus"></i>
                        <div>Add City</div>
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>

      <ModalProvince
        modal={modalProvince}
        toggle={toggleProvince}
        setUpdate={setUpdate}
        data={province}
      />
      <ModalCity
        modal={modalCity}
        toggle={toggleCity}
        province={province}
        setProvince={setProvince}
        setUpdate={setUpdate}
      />
      <ModalDelete
        modal={modalDelete}
        toggle={toggleDelete}
        type="province"
        id={province?._id}
        setUpdate={setUpdate}
      ></ModalDelete>
    </Fragment>
  );
};
